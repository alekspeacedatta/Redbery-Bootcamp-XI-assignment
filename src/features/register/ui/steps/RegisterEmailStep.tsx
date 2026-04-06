import { Input } from "@/shared/ui";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { RegisterSchema } from "../../model/register.schema";


type RegisterEmailStepProps = {
  register: UseFormRegister<RegisterSchema>;
  errors: FieldErrors<RegisterSchema>;
};

export const RegisterEmailStep = ({
  register,
  errors,
}: RegisterEmailStepProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        className={`
          text-sm text-[#3D3D3D] font-medium
          ${errors.email ? "text-red-500" : ""}
        `}
      >
        Email*
      </label>

      <Input
        {...register("email")}
        error={!!errors.email}
        placeholder="your@example.com"
        className="py-3.25"
      />

      {errors.email && (
        <p className="text-red-500">{errors.email.message}</p>
      )}
    </div>
  );
};