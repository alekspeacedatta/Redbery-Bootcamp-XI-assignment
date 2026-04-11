import { Input } from "@/shared/ui";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { RegisterSchema } from "../../model/register.schema";

type RegisterPasswordStepProps = {
  register: UseFormRegister<RegisterSchema>;
  errors: FieldErrors<RegisterSchema>;
};

export const RegisterPasswordStep = ({
  register,
  errors,
}: RegisterPasswordStepProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label
          className={`
            text-sm text-[#3D3D3D] font-medium
            ${errors.password ? "text-red-500" : ""}
          `}
        >
          Password*
        </label>

        <Input
          {...register("password")}
          error={!!errors.password}
          placeholder="password"
          type="password"
          className="py-3.25"
        />

        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label
          className={`
            text-sm text-[#3D3D3D] font-medium
            ${errors.password_confirmation ? "text-red-500" : ""}
          `}
        >
          Confirm Password*
        </label>

        <Input
          {...register("password_confirmation")}
          error={!!errors.password_confirmation}
          placeholder="•••••••"
          type="password"
          className="py-3.25"
        />

        {errors.password_confirmation && (
          <p className="text-red-500">{errors.password_confirmation.message}</p>
        )}
      </div>
    </div>
  );
};
