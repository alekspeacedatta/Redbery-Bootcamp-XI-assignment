import { useForm, useWatch } from "react-hook-form";
import type { AxiosError } from "axios";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/shared/ui";
import { useRegister } from "../hooks/useRegister";
import { RegisterEmailStep } from "./steps/RegisterEmailStep";
import { RegisterPasswordStep } from "./steps/RegisterPasswordStep";
import { RegisterUsernameStep } from "./steps/RegisterUsernameStep";
import {
  registerSchema,
  type RegisterSchema,
} from "../model/register.schema";
import {
  RegistrationStep,
  stepFields,
  STEPS,
  type RegistrationStepType,
} from "../model/register-steps";

type LaravelErrorResponse = {
  message?: string;
  errors?: Record<string, string[]>;
};

export const RegisterForm = () => {
  const { mutate } = useRegister();

  const [currentStep, setCurrentStep] = useState<RegistrationStepType>(
    RegistrationStep.EMAIL
  );

  const currentIndex = STEPS.indexOf(currentStep);
  const isLastStep = currentIndex === STEPS.length - 1;

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    control,
    setError,
    reset,
    clearErrors,
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
      password_confirmation: "",
      username: "",
      avatar: null,
    },
  });

  const watchedEmail = useWatch({ control, name: "email" });
  const watchedPassword = useWatch({ control, name: "password" });
  const watchedPasswordConfirmation = useWatch({
    control,
    name: "password_confirmation",
  });
  const watchedUsername = useWatch({ control, name: "username" });

  const getStepByField = (
    field: keyof RegisterSchema
  ): RegistrationStepType | null => {
    if (field === "email") return RegistrationStep.EMAIL;

    if (field === "password" || field === "password_confirmation") {
      return RegistrationStep.PASSWORDS;
    }

    if (field === "username" || field === "avatar") {
      return RegistrationStep.USERNAME;
    }

    return null;
  };
  const handleNext = async (e: React.MouseEvent) => {
    e.preventDefault();

    clearErrors("root");

    const fields = stepFields[currentStep];
    const isStepValid = await trigger(fields);

    if (isStepValid && !isLastStep) {
      setCurrentStep(STEPS[currentIndex + 1]);
    }
  };
  const isStepDisabled = () => {
    if (currentStep === RegistrationStep.EMAIL) {
      return !watchedEmail || !!errors.email;
    }

    if (currentStep === RegistrationStep.PASSWORDS) {
      return (
        !watchedPassword ||
        !watchedPasswordConfirmation ||
        !!errors.password ||
        !!errors.password_confirmation
      );
    }
    if (currentStep === RegistrationStep.USERNAME) {
      return !watchedUsername || !!errors.username;
    }
    return false;
  };

  const onSubmit = (data: RegisterSchema) => {
    clearErrors("root");
    mutate(data, {
      onSuccess: () => {
        reset({
          email: "",
          password: "",
          password_confirmation: "",
          username: "",
          avatar: null,
        });

        setCurrentStep(RegistrationStep.EMAIL);
      },
      onError: (error: AxiosError<LaravelErrorResponse>) => {
        const responseData = error.response?.data;
        const fieldErrors = responseData?.errors;

        if (fieldErrors && Object.keys(fieldErrors).length > 0) {
          const firstField = Object.keys(fieldErrors)[0] as keyof RegisterSchema;

          Object.entries(fieldErrors).forEach(([field, messages]) => {
            const typedField = field as keyof RegisterSchema;

            setError(typedField, {
              type: "server",
              message: messages[0],
            });
          });
          const stepWithError = getStepByField(firstField);

          if (stepWithError) {
            setCurrentStep(stepWithError);
          }
          return;
        }
        setError("root", {
          type: "server",
          message: responseData?.message || "Something went wrong",
        });
      },
    });
  };
  return (
    <div className="flex flex-col gap-6 w-full items-center">
      <div className="grid grid-cols-3 gap-2 h-2 w-full">
        {STEPS.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-full rounded-[30px] transition-colors duration-300
              ${
                index < currentIndex
                  ? "bg-[#4F46E5]"
                  : index === currentIndex
                  ? "bg-[#B7B3F4]"
                  : "bg-[#EEEDFC]"
              }
            `}
          />
        ))}
      </div>
      <form
        className="w-full flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        {errors.root && (
          <div
            className="
              p-3 rounded-lg bg-red-50 border border-red-200
              text-red-500 text-sm font-medium"
          >
            {errors.root.message}
          </div>
        )}
        {currentStep === RegistrationStep.EMAIL && (
          <RegisterEmailStep register={register} errors={errors} />
        )}
        {currentStep === RegistrationStep.PASSWORDS && (
          <RegisterPasswordStep register={register} errors={errors} />
        )}
        {currentStep === RegistrationStep.USERNAME && (
          <RegisterUsernameStep control={control} errors={errors} />
        )}
        <Button
          onClick={isLastStep ? undefined : handleNext}
          disabled={isStepDisabled()}
          type={isLastStep ? "submit" : "button"}
          fullWidth
          variant="primary"
          className="h-12 mt-2 disabled:bg-[#4e46e581]"
        >
          {isLastStep ? "Sign Up" : "Next"}
        </Button>
      </form>
    </div>
  );
};