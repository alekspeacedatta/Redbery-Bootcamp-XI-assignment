import { FileInput, Input } from "@/shared/ui";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { RegisterSchema } from "../../model/register.schema";

type RegisterUsernameStepProps = {
  register: UseFormRegister<RegisterSchema>;
  errors: FieldErrors<RegisterSchema>;
};

export const RegisterUsernameStep = ({
  register,
  errors,
}: RegisterUsernameStepProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label className="text-sm text-[#3D3D3D] font-medium">
          Username*
        </label>

        <Input
          {...register("username")}
          error={!!errors.username}
          placeholder="Username"
          className="py-3.25"
        />

        {errors.username && (
          <p className="text-red-500">{errors.username.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label
          className={`
            text-sm text-[#3D3D3D] font-medium
            ${errors.avatar ? "text-red-500" : ""}
          `}
        >
          Upload Avatar
        </label>

        <FileInput error={!!errors.avatar}>
          <Input
            {...register("avatar")}
            error={!!errors.avatar}
            type="file"
            className="hidden"
            onClick={(e) => {
              (e.currentTarget as HTMLInputElement).value = "";
            }}
          />
        </FileInput>

        {errors.avatar && (
          <p className="text-red-500">{errors.avatar.message?.toString()}</p>
        )}
      </div>
    </div>
  );
};