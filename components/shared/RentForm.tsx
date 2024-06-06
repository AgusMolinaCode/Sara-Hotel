"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray, Controller } from "react-hook-form";
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
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { rentFormSchema } from "@/lib/validator";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function RentForm() {
  // ...
  const form = useForm<z.infer<typeof rentFormSchema>>({
    resolver: zodResolver(rentFormSchema),
    defaultValues: {
      checkIn: new Date(),
      checkOut: new Date(),
      adults: 1,
      children: 0,
      childrenAges: [0],
    },
  });

  function onSubmit(values: z.infer<typeof rentFormSchema>) {
    let checkInStr = new Date(values.checkIn).toISOString().split("T")[0];
    let checkOutStr = new Date(values.checkOut).toISOString().split("T")[0];

    let url = `https://www.booking.com/hotel/ar/blackstone-country-villages.es.html?checkin=${checkInStr}&checkout=${checkOutStr}&group_adults=${values.adults}&group_children=${values.children}`;

    // Agrega dinámicamente los parámetros de edad a la URL
    values.childrenAges.forEach((age, index) => {
      url += `&age=${age}`;
    });

    // Abre la URL en una nueva pestaña del navegador
    window.open(url, "_blank");
  }

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "childrenAges" as never,
  });

  const handleChildrenChange = (e: { target: { value: string } }) => {
    const numChildren = parseInt(e.target.value);
    const currentNumChildren = fields.length;

    if (numChildren > currentNumChildren) {
      for (let i = 0; i < numChildren - currentNumChildren; i++) {
        append({ age: "" });
      }
    } else {
      for (let i = 0; i < currentNumChildren - numChildren; i++) {
        remove(i);
      }
    }

    form.setValue("children", numChildren);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col lg:flex-row gap-1 py-[0.05rem] px-1"
      >
        <FormField
          control={form.control}
          name="checkIn"
          render={({ field }) => (
            <FormItem className=" space-y-0 relative">
              <FormControl>
                <div className="grid w-full overflow-hidden rounded-lg bg-grey-50  py-2">
                  <Image
                    src="/icons/calendar2.svg"
                    alt="calendar"
                    width={22}
                    height={22}
                    className="m-auto absolute z-10 top-[1.1rem] left-6"
                  />
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
                    className="text-center w-full border border-black bg-slate-100/50 rounded-lg px-2 py-2 font-medium text-black focus:outline-none"
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
            <FormItem className=" space-y-0 relative">
              <FormControl>
                <div className="grid w-full overflow-hidden rounded-lg bg-grey-50 py-2">
                  <Image
                    src="/icons/calendar2.svg"
                    alt="calendar"
                    width={22}
                    height={22}
                    className="m-auto absolute z-10 top-[1.1rem] left-6"
                  />
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
                    className="text-center w-full border border-black bg-slate-100/50 rounded-lg px-2 py-2 font-medium text-black focus:outline-none"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-y-0">
          <Popover>
            <PopoverTrigger className="w-full lg:w-[280px] flex justify-center lg:pl-10 border border-black bg-slate-100/50 rounded-lg px-2 my-2 py-2 font-medium text-black relative">
              <Image
                src="/icons/user2.svg"
                alt="person"
                width={26}
                height={26}
                className="absolute z-10 top-[0.4rem] left-5 lg:left-6"
              />
              {`${form.watch("adults") || 0} adults - ${
                form.watch("children") || 0
              } childrens`}
            </PopoverTrigger>
            <PopoverContent>
              <FormLabel>Adults</FormLabel>
              <FormField
                control={form.control}
                name="adults"
                render={({ field }) => (
                  <FormItem className=" space-y-0">
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        onChange={(e) => {
                          form.setValue("adults", parseInt(e.target.value));
                        }}
                        className="w-full border border-black bg-slate-100/50 rounded-lg px-2 py-2 font-medium text-black focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-offset-transparent focus-visible:ring-black focus-visible:ring-opacity-50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormDescription>Age 12 or above</FormDescription>
              <FormLabel>Childrens</FormLabel>
              <FormField
                control={form.control}
                name="children"
                render={({ field }) => (
                  <FormItem className=" space-y-0">
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        onChange={handleChildrenChange}
                        className="w-full border border-black bg-slate-100/50 rounded-lg px-2 py-2 font-medium text-black focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-offset-transparent focus-visible:ring-black focus-visible:ring-opacity-50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormDescription>Children under 12 years.</FormDescription>
              {fields.map((field, index) => (
                <div key={field.id} className="space-y-0">
                  <FormLabel>Age</FormLabel>
                  <FormField
                    key={field.id}
                    control={form.control}
                    name={`childrenAges[${index}]` as any} // Añade 'as any' aquí
                    render={({ field }) => (
                      <FormItem className=" space-y-0">
                        <FormControl>
                          <Input
                            {...field}
                            type="number"
                            onChange={(e) => {
                              form.setValue(
                                `childrenAges[${index}]` as any, // Y aquí
                                parseInt(e.target.value)
                              );
                            }}
                            className="w-full border border-black bg-slate-100/50 rounded-lg px-2 py-2 font-medium text-black focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-offset-transparent focus-visible:ring-black focus-visible:ring-opacity-50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormDescription>from 1 to 12 years old.</FormDescription>
                </div>
              ))}
            </PopoverContent>
          </Popover>
        </div>
        <div>
          <button
            type="submit"
            className="group hidden relative lg:inline-flex h-12 w-12 mt-[0.30rem] items-center justify-center overflow-hidden rounded-full bg-neutral-950 font-medium text-neutral-200 transition-all duration-300 hover:w-32"
          >
            <div className="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100">
              Buscar
            </div>
            <div className="absolute right-3.5">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </button>
          <Button className="lg:hidden w-full h-10 mb-2">
            Buscar
          </Button>
        </div>
      </form>
    </Form>
  );
}
