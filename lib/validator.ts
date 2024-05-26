import * as z from "zod";

export const rentFormSchema = z.object({
  checkIn: z.date(),
  checkOut: z.date(),
  adults: z.number().min(1),
  children: z.number().min(0),
  rooms: z.number().min(1),
});