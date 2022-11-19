import React, { HTMLInputTypeAttribute } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "./Input";

type QuoteFormProps = {};

type FormData = {
  fromZip: number;
  toZip: number;
  rooms: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: HTMLInputTypeAttribute;
  moveInDate: HTMLInputTypeAttribute;
};

const QuoteForm = ({}: QuoteFormProps) => {
  let inputClassName = "border-2 border-black";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <Input htmlFor="fromZip" label="From Zip">
            <input
              type="number"
              className={inputClassName}
              {...register("fromZip")}
            />
          </Input>
          <Input htmlFor="toZip" label="To Zip">
            <input
              type="number"
              className={inputClassName}
              {...register("toZip")}
            />
          </Input>
          <Input htmlFor="rooms" label="How many rooms?">
            <input
              type="number"
              className={inputClassName}
              {...register("rooms")}
            />
          </Input>
          <Input htmlFor="firstName" label="First Name">
            <input
              type="text"
              className={inputClassName}
              {...register("firstName")}
            />
          </Input>
          <Input htmlFor="lastName" label="Last Name">
            <input
              type="text"
              className={inputClassName}
              {...register("lastName")}
            />
          </Input>
          <Input htmlFor="email" label="Email">
            <input
              type="email"
              className={inputClassName}
              {...register("email")}
            />
          </Input>
          <Input htmlFor="phone" label="Telephone">
            <input
              type="tel"
              className={inputClassName}
              {...register("phone")}
            />
          </Input>
          <Input htmlFor="moveInDate" label="Move in date">
            <input
              type="date"
              className={inputClassName}
              {...register("moveInDate")}
            />
          </Input>
        </div>

        <input type="submit" className="mt-4 border bg-primaryColor text-white px-4 py-2 cursor-pointer" />
      </form>
    </div>
  );
};

export default QuoteForm;
