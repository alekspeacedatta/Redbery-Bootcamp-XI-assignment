import z from "zod";

const MAX_FILE_SIZE = 1000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpg",
  "image/jpeg",
  "image/png",
  "image/webp",
];

export const registerSchema = z
  .object({
    email: z.string().email("Invalid Email format"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    password_confirmation: z.string(),
    username: z.string().min(3, "Username must be at least 3 characters"),
    avatar: z
      .instanceof(File)
      .nullable()
      .optional()
      .refine((file) => !file || file.size <= MAX_FILE_SIZE, {
        message: "Max image size is 1MB.",
      })
      .refine((file) => !file || ACCEPTED_IMAGE_TYPES.includes(file.type), {
        message: "Only .jpg, .jpeg, .png and .webp formats are supported.",
      }),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["password_confirmation"],
  });

export type RegisterSchema = z.infer<typeof registerSchema>;
