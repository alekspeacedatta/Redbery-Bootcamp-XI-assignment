import z from "zod";

const MAX_FILE_SIZE = 2000000; // 2MB
const ACCEPTED_IMAGE_TYPES = ["image/jpg", "image/png", "image/webp"];

export const registerSchema = z.object({
    email: z.string().email('Invalid Email format'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    password_confirmation: z.string(),
    username: z.string().min(3, 'Username must be at least 3 characters'),
    avatar: z
        .any()
        .optional()
        .refine((files) => !files || files?.length === 0 || files[0].size <= MAX_FILE_SIZE,
         `Max image size is 2MB.`)
        .refine(
            (files) => !files || files.length === 0 || ACCEPTED_IMAGE_TYPES.includes(files[0]?.type),
            "Only .jpg, .png and .webp formats are supported."
        ),
}).refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
    path: ["password_confirmation"]
})

export type RegisterSchema = z.infer<typeof registerSchema>
