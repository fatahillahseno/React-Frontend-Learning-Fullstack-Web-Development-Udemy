import { z } from "zod";

const passwordValidation = new RegExp(
  /^(?=.*\d)(?=.*[!@#$%^&*_])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
);

export const SignupSchema = z.object({
  firstName: z
    .string()
    .min(3, {
      message: "First name must be at least 3 characters.",
    })
    .max(100, { message: "Fist name cannot be more than 100 characters." }),
  lastName: z
    .string()
    .max(100, { message: "Last name cannot be more than 100 characters." })
    .optional(),
  email: z.string().email(),
  password: z.string().regex(passwordValidation, {
    message:
      "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
  }),
});
