import { z } from "zod";

export const createUserSchema = z.object({
    firstName: z.string().trim().min(2, "First name must be at least 2 characters.").max(50),

    lastName: z.string().trim().min(2, "Last name must be at least 2 characters.").max(50),

    email: z.string().trim().toLowerCase().email("Invalid email address."),

    phoneNumber: z
        .string()
        .regex(/^[6-9]\d{9}$/, "Phone number must be a valid Indian mobile number."),

    password: z
        .string()
        .min(8, "Password must be at least 8 characters.")
        .max(100)
        .regex(/[A-Z]/, "Password must contain an uppercase letter.")
        .regex(/[a-z]/, "Password must contain a lowercase letter.")
        .regex(/[0-9]/, "Password must contain a number.")
        .regex(/[!@#$%^&*]/, "Password must contain a special character."),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;
