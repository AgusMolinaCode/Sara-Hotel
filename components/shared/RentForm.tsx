"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { rentFormSchema } from "@/lib/validator";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function RentForm() {
  // ...
  const form = useForm<z.infer<typeof rentFormSchema>>({
    resolver: zodResolver(rentFormSchema),
    defaultValues: {
      checkIn: new Date(),
      checkOut: new Date(),
      adults: 1,
      children: 0,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof rentFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-3 py-1">
        <FormField
          control={form.control}
          name="checkIn"
          render={({ field }) => (
            <FormItem className=" space-y-0">
              <FormControl>
                <div className="grid w-full overflow-hidden rounded-full bg-grey-50 px-2 py-2">
                  <DatePicker
                    selected={field.value}
                    onChange={(date: Date) => {
                      form.setValue("checkIn", date);
                    }}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeCaption="time"
                    dateFormat="MMMM d, yyyy h:mm aa"
                    minDate={new Date()}
                    className="w-full border border-black bg-slate-100/50 rounded-lg px-2 py-2 font-medium text-black"
                    placeholderText="Seleccione la fecha de inicio"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="checkIn"
          render={({ field }) => (
            <FormItem className=" space-y-0">
              <FormControl>
                <div className="grid w-full overflow-hidden rounded-full bg-grey-50 px-2 py-2">
                  <DatePicker
                    selected={field.value}
                    onChange={(date: Date) => {
                      form.setValue("checkIn", date);
                    }}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeCaption="time"
                    dateFormat="MMMM d, yyyy h:mm aa"
                    minDate={new Date()}
                    className="w-full border border-black bg-slate-100/50 rounded-lg px-2 py-2 font-medium text-black"
                    placeholderText="Seleccione la fecha de inicio"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <Button type="submit">Submit</Button> */}
      </form>
    </Form>
  );
}
