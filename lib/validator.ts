import * as z from "zod";

export const rentFormSchema = z.object({
  checkIn: z.date(),
  checkOut: z.date(),
  adults: z.number().min(1),
  children: z.array(z.object({ age: z.number().min(0) })),
});