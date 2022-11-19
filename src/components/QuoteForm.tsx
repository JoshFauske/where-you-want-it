import React, { HTMLInputTypeAttribute, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Alert from "./Alert";

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

type InputProps = {
  label: string;
  required: boolean;
  register: any;
  registerAs: string;
  type: string;
};

type ErrorProps = {
  msg: string;
};

const Input = ({ label, register, registerAs, required, type }: InputProps) => (
  <div className="flex flex-col">
    <label>{label}</label>
    <input
      type={type}
      className="border-2 border-black"
      {...register(registerAs, { required })}
    />
  </div>
);

const Error = ({ msg }: ErrorProps) => (
  <p role="alert" className="text-sm text-red-600 italic">
    {msg}
  </p>
);

const QuoteForm = ({}: QuoteFormProps) => {
	const [formError, setFormError] = useState<boolean>(false)
	const [formSuccess, setFormSuccess] = useState<boolean>(false)

	useEffect(() => {
    emailjs.init('RWuD-9-E_3cyevkLk');
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    let templateParams = {
      fromName: data.firstName + " " + data.lastName,
      email: data.email,
      phone: data.phone,
      toZip: data.toZip,
      fromZip: data.fromZip,
      rooms: data.rooms,
      moveInDate: data.moveInDate,
    };

    emailjs.send("contact_service", "contact_form_template", templateParams).then(
      function (response: { status: number; text: string }) {
        setFormSuccess(true)
        setFormError(false)
      },
      function (error: string) {
        setFormSuccess(false)
        setFormError(true)
      }
    );
  };

  return (
    <div className="w-full">
			{formSuccess && <Alert type="success" msg="Success! Your quote has been recieved. Please check your email for confirmation." />}
			{formError && <Alert type="error" msg="Error! Something went wrong, please try again." />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <div>
            <Input
              type="number"
              label="From Zip"
              register={register}
              registerAs="fromZip"
              required
            />
            {errors.fromZip?.type === "required" && (
              <Error msg="From zip is required" />
            )}
          </div>
          <div>
            <Input
              type="number"
              label="To Zip"
              register={register}
              registerAs="toZip"
              required
            />
            {errors.toZip?.type === "required" && (
              <Error msg="To zip is required" />
            )}
          </div>
          <div>
            <Input
              type="number"
              label="How Many Rooms"
              register={register}
              registerAs="rooms"
              required
            />
            {errors.rooms?.type === "required" && (
              <Error msg="How many rooms is required" />
            )}
          </div>
          <div>
            <Input
              type="text"
              label="First Name"
              register={register}
              registerAs="firstName"
              required
            />
            {errors.firstName?.type === "required" && (
              <Error msg="First name is required" />
            )}
          </div>
          <div>
            <Input
              type="text"
              label="Last Name"
              register={register}
              registerAs="lastName"
              required
            />
            {errors.lastName?.type === "required" && (
              <Error msg="Last name is required" />
            )}
          </div>
          <div>
            <Input
              type="email"
              label="Email"
              register={register}
              registerAs="email"
              required
            />
            {errors.email?.type === "required" && (
              <Error msg="Email is required" />
            )}
          </div>
          <div>
            <Input
              type="tel"
              label="Telephone"
              register={register}
              registerAs="phone"
              required
            />
            {errors.phone?.type === "required" && (
              <Error msg="Telephone is required" />
            )}
          </div>
          <div>
            <Input
              type="date"
              label="Move in date"
              register={register}
              registerAs="moveInDate"
              required
            />
            {errors.moveInDate?.type === "required" && (
              <Error msg="Move in date is required" />
            )}
          </div>
        </div>

        <input
          type="submit"
          className="mt-4 border bg-primaryColor text-white px-4 py-2 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default QuoteForm;
