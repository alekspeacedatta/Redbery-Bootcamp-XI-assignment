import { useForm, useWatch } from "react-hook-form";
import type { AxiosError } from "axios";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/shared/ui";
import { useRegister } from "../hooks/useRegister";
import { RegisterEmailStep } from "./steps/RegisterEmailStep";
import { RegisterPasswordStep } from "./steps/RegisterPasswordStep";
import { RegisterUsernameStep } from "./steps/RegisterUsernameStep";
import { registerSchema, type RegisterSchema } from "../model/register.schema";

export const RegistrationStep = {
  EMAIL: 'email',
  PASSWORDS: 'passwords',
  USERNAME: 'username'
} as const;

export type RegistrationStepType = typeof RegistrationStep[keyof typeof RegistrationStep];

const STEPS: RegistrationStepType[] = [ 
  RegistrationStep.EMAIL, 
  RegistrationStep.PASSWORDS, 
  RegistrationStep.USERNAME
];

const stepFields = {
  [RegistrationStep.EMAIL]: ['email'],
  [RegistrationStep.PASSWORDS]: ['password', 'password_confirmation'],
  [RegistrationStep.USERNAME]: ['username'],
} as const;

export const RegisterForm = () => {

    const [currentStep, setCurrentStep] = useState<RegistrationStepType>(RegistrationStep.EMAIL);
    
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
    } = useForm<RegisterSchema>({
        resolver: zodResolver(registerSchema),
        mode: 'all',
        defaultValues: {
            email: '',
            password: '',
            password_confirmation: '',
            username: '',
            avatar: null
        }
    })

    const watchedEmail = useWatch({ control, name: 'email' });
    const watchedPassword = useWatch({ control, name: 'password' });
    const watchedPasswordConfirmation = useWatch({ control, name: 'password_confirmation' });
    const watchedUsername = useWatch({ control, name: 'username' });

   const handleNext = async (e: React.MouseEvent) => {
        e.preventDefault();

        const fields = stepFields[currentStep];
        const isStepValid = await trigger(fields);

        if (isStepValid && !isLastStep) {
            setCurrentStep(STEPS[currentIndex + 1]);
        }
    };
  
    const { mutate } = useRegister()
  

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
    
    const onSubmit = ( data : RegisterSchema ) => {
        mutate(data, {
            onSuccess: () => reset(),
            onError: (error : AxiosError<{ message: string }>) => {
                const apiMessage = error.response?.data?.message || 'Something went wrong'
                setError("root", {
                    message: apiMessage
                })
            }
        })
    }

  return (
    <div className="flex flex-col gap-6 w-full items-center">
      {/* Stepper Progress Bars */}
      <div className="grid grid-cols-3 gap-2 h-2 w-full">
        {STEPS.map((_, index) => (
          <div 
            key={index} 
            className={`h-2 w-full rounded-[30px] transition-colors duration-300
              ${index < currentIndex ? 'bg-[#4F46E5]' : index === currentIndex ? 'bg-[#B7B3F4]' : 'bg-[#EEEDFC]'}
            `} 
          />
        ))}
      </div>
      {/* Registration Form Sections */}
      <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        {errors.root && (
            <div className="
                p-3 rounded-lg bg-red-50 border border-red-200
                text-red-500 text-sm font-medium">
                {errors.root.message}
            </div>
        )}
        {currentStep === RegistrationStep.EMAIL && (
          <RegisterEmailStep register={register} errors={errors}/>
        )}
        {currentStep === RegistrationStep.PASSWORDS && (
            <RegisterPasswordStep register={register} errors={errors}/>
        )}
        {currentStep === RegistrationStep.USERNAME && (
          <RegisterUsernameStep register={register} errors={errors}/>
        )}
        {/* Single Dynamic Button */}
        <Button 
          onClick={isLastStep ? undefined : handleNext}
          disabled={isStepDisabled()}
          type={isLastStep ? 'submit' : 'button'} 
          fullWidth
          variant="primary"
          className="h-12 mt-2 disabled:bg-[#4e46e581]"
        >
          {isLastStep ? 'Sign Up' : 'Next'}
        </Button>
      </form>
    </div>
  );
};

