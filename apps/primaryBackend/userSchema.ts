import { z } from "zod";

export const userSignupSchema = z.object({
    email: z.string(),
    password: z.string()
});