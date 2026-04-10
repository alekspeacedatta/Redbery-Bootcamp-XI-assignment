import z from "zod";

const MAX_FILE_SIZE = 1000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpg",
  "image/jpeg",
  "image/png",
  "image/webp",
];

export const profileSchema = z.object({
    fullname: z.string().min(3, "name must be at least 3 characters").max(50, 'Name must not exceed 50 characters'),
    email: z.string().email(),
    mobileNumber: z.string()
    .min(1, "Mobile number is required")
    .refine((val) => {
        const digits = val.replace(/\s/g, '')
        return digits.length > 0
    }, "Mobile number is required")
    .refine((val) => {
        const digits = val.replace(/\s/g, '')
        return /^\d+$/.test(digits)
    }, "Please enter a valid Georgian mobile number (9 digits starting with 5)")
    .refine((val) => {
        const digits = val.replace(/\s/g, '')
        return digits.startsWith('5')
    }, "Georgian mobile numbers must start with 5")
    .refine((val) => {
        const digits = val.replace(/\s/g, '')
        return digits.length === 9
    }, "Mobile number must be exactly 9 digits"),
    age: z.number().min(1, "Age is required").min(16, "You must be at least 16 years old to enroll")
    .max(120, "Please enter a valid age"),
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

export type ProfileSchema = z.infer<typeof profileSchema>;