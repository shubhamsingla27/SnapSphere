import * as z from "zod";

export const SignupValidation = z.object({
  name: z.string().min(2, { message: "Name is too short" }),
  username: z.string().min(2, { message: "Username is too short" }),
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

export const SigninValidation = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

export const PostValidation = z.object({
  caption: z
    .string()
    .min(5, { message: "Caption is too short" })
    .max(2200, { message: "Caption is too long" }),
  file: z.custom<File[]>(),
  location: z
    .string()
    .min(2, { message: "Location is too short" })
    .max(100, { message: "Location is too long" }),
  tags: z.string(),
});
