import {
  Controller,
  type Control,
  type FieldErrors,
  type UseFormRegister,
} from "react-hook-form";
import { FileInput, Input } from "@/shared/ui";
import type { RegisterSchema } from "../../model/register.schema";

type RegisterUsernameStepProps = {
  register?: UseFormRegister<RegisterSchema>;
  control: Control<RegisterSchema>;
  errors: FieldErrors<RegisterSchema>;
};

export const RegisterUsernameStep = ({
  control,
  errors,
}: RegisterUsernameStepProps) => {
  return (
    <div className="flex flex-col gap-4">
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-[#3D3D3D] font-medium">
              Username*
            </label>

            <Input
              {...field}
              error={!!errors.username}
              placeholder="Username"
              className="py-3.25"
            />

            {errors.username && (
              <p className="text-red-500">{errors.username.message}</p>
            )}
          </div>
        )}
      />

      <div className="flex flex-col gap-2">
        <label
          className={`text-sm text-[#3D3D3D] font-medium ${
            errors.avatar ? "text-red-500" : ""
          }`}
        >
          Upload Avatar
        </label>

        <Controller
          name="avatar"
          control={control}
          render={({ field: { onChange, ref } }) => (
            <FileInput error={!!errors.avatar}>
              <Input
                ref={ref}
                type="file"
                accept=".jpg,.jpeg,.png,.webp"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0] ?? null;
                  onChange(file);
                }}
                onClick={(e) => {
                  (e.currentTarget as HTMLInputElement).value = "";
                }}
              />
            </FileInput>
          )}
        />

        {errors.avatar && (
          <p className="text-red-500">{errors.avatar.message?.toString()}</p>
        )}
      </div>
    </div>
  );
};
