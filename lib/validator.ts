import * as z from "zod";

export const rentFormSchema = z.object({
  checkIn: z.date(),
  checkOut: z.date(),
  adults: z.number().min(1),
  children: z.number().min(0),
  childrenAges: z
    .array(z.number({message:"enter child's age"}).min(1).max(12)),
});
