"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { set, z } from "zod";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { rentFormSchema } from "@/lib/validator";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

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

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid md:grid-cols-4 gap-1 py-[0.05rem] px-1"
      >
        <FormField
          control={form.control}
          name="checkIn"
          render={({ field }) => (
            <FormItem className=" space-y-0">
              <FormControl>
                <div className="grid w-full overflow-hidden rounded-lg bg-grey-50  py-2">
                  <DatePicker
                    selected={field.value as Date}
                    onChange={(date: Date) => {
                      form.setValue("checkIn", date);
                      setStartDate(date);
                    }}
                    minDate={new Date()}
                    dateFormat="MMMM d, yyyy"
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    className="text-center border border-black bg-slate-100/50 rounded-lg px-2 py-2 font-medium text-black focus:outline-none"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="checkOut"
          render={({ field }) => (
            <FormItem className=" space-y-0">
              <FormControl>
                <div className="grid w-full overflow-hidden rounded-lg bg-grey-50 py-2">
                  <DatePicker
                    selected={field.value as Date}
                    onChange={(date: Date) => {
                      form.setValue("checkOut", date);
                      setEndDate(date);
                    }}
                    dateFormat="MMMM d, yyyy"
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={
                      new Date(
                        new Date(startDate).setDate(startDate.getDate() + 1)
                      )
                    }
                    className="text-center border border-black bg-slate-100/50 rounded-lg px-2 py-2 font-medium text-black focus:outline-none"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-y-0">
          <Popover>
            <PopoverTrigger className="w-full border border-black bg-slate-100/50 rounded-lg px-2 my-2 py-2 font-medium text-black">
              Open
            </PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
        </div>
        <Button className="px-2 my-2 py-2" type="submit">Submit</Button>
      </form>
    </Form>
  );
}
