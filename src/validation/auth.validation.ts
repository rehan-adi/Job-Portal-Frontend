import { z } from "zod";

export const signupValidation = z.object({
  email: z.string().trim().email({ message: "Invalid email address format" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
    role: z.enum(["job_seeker", "employer"], {message: "Invalid role"}, )
    .or(z.literal("")),
});

export const signinValidation = z.object({
  email: z.string().trim().email({ message: "Invalid email address format" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    }),
});
