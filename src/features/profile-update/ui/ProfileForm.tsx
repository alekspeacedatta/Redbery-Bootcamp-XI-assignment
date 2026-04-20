import { Button, FileInput, Input } from "@/shared/ui";
import { faDonate, faPen } from "@fortawesome/free-solid-svg-icons";
import { profileSchema, type ProfileSchema } from "../model/profile-model";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUserStore } from "@/entities/session";
import { useUpdateProfile } from "../hooks/useUpdateProfile";

export const ProfileForm = () => {
  const user = useUserStore((state) => state.user);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, touchedFields },
  } = useForm<ProfileSchema>({
    resolver: zodResolver(profileSchema),
    mode: "onBlur",
    defaultValues: {
      fullname: user?.fullName ?? "",
      email: user?.email,
      mobileNumber: user?.mobileNumber ?? "",
      age: user?.age ?? 0,
      avatar: null,
    },
  });

  const { mutate, isPending } = useUpdateProfile();

  const onSubmit = (data: ProfileSchema) => {
    mutate(data);
  };
  if (isPending) {
    return <p>Loading...</p>;
  }
  return (
    <form
      className="flex flex-col gap-3 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* FullName */}
      <section className="flex flex-col gap-2">
        <label
          className={`
                ${touchedFields.fullname ? (errors.fullname ? "text-red-500" : "text-green-500") : "text-[#3D3D3D]"}
                text-sm font-medium leading-none
            `}
        >
          Full Name
        </label>
        <Input
          {...register("fullname")}
          icon={faPen}
          placeholder="Username"
          className="bg-[#F5F5F5] h-12 border-3 border-[#ADADAD]"
        />
        {errors.fullname && (
          <p className="text-red-500 text-xs leading-1">
            {errors.fullname.message}
          </p>
        )}
      </section>
      {/* Email */}
      <section className="flex flex-col gap-2">
        <label
          className={`
                text-sm text-[#3D3D3D] font-medium leading-none
            `}
        >
          Email
        </label>
        <Input
          {...register("email")}
          readOnly
          disabled={true}
          icon={faDonate}
          placeholder="Email@gmail.com"
          className="bg-[#F5F5F5] h-12 border-3 border-[#ADADAD] opacity-40"
        />
      </section>
      {/* Mobile Number and Age */}
      <section className="flex flex-col gap-2">
        <section className="flex items-center gap-2">
          {/* Mobile Number */}
          <section className="flex-3 flex flex-col gap-2">
            <label
              className={`
                        ${touchedFields.mobileNumber ? (errors.mobileNumber ? "text-red-500" : "text-green-500") : "text-[#3D3D3D]"}
                        text-sm  font-medium leading-none text-[#3D3D3D]
                    `}
            >
              Mobile Number
            </label>
            <Input
              {...register("mobileNumber")}
              className=" h-12 border-3 border-[#ADADAD]"
              prefix="+995"
            />
          </section>
          {/* Age */}
          <section className="flex-1 flex flex-col gap-2">
            <label
              className={`
                        ${touchedFields.age ? (errors.age ? "text-red-500" : "text-green-500") : "text-[#3D3D3D]"}
                        text-sm  font-medium leading-none text-[#3D3D3D]| 
                    `}
            >
              Age
            </label>
            <Input
              {...register("age", { valueAsNumber: true })}
              type="number"
              placeholder="age"
              className=" h-12 border-3 border-[#ADADAD]"
            />
          </section>
        </section>
        {(errors.mobileNumber || errors.age) && (
          <p className="text-red-500 text-xs">
            {errors.age?.message} <span className="font-bold"> - </span>
            {errors.mobileNumber?.message},
          </p>
        )}
      </section>
      {/* Upload Avatar */}
      <section className="flex flex-col gap-2">
        <label
          className={`
                ${touchedFields.avatar ? (errors.avatar ? "text-red-500" : "text-green-500") : "text-[#3D3D3D]"}
                text-sm text-[#3D3D3D] font-medium leading-none
            `}
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
      </section>
      {/* Button Submit */}
      <Button
        variant="primary"
        type="submit"
        className={`h-12 ${isPending && "bg-[#4e46e5b9]"}  `}
      >
        {isPending ? "Updating..." : "Update Profile"}
      </Button>
    </form>
  );
};
