import * as z from "zod";

export const rentFormSchema = z.object({
  username: z.string().min(2).max(50),
});
