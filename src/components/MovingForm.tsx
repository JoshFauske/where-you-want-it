import React, { HTMLInputTypeAttribute, useEffect, useState } from "react";
import ErrorMsg from "./ErrorMsg";
import Input from "./Input";
import { SubmitHandler, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

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

type MovingFormProps = {
  setFormError: any;
  setFormSuccess: any;
};

const MovingForm = ({ setFormError, setFormSuccess }: MovingFormProps) => {
  useEffect(() => {
    emailjs.init("RWuD-9-E_3cyevkLk");
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    let templateParams = {
			quoteType: 'moving',
      fromName: data.firstName + " " + data.lastName,
      email: data.email,
      phone: data.phone,
      toZip: data.toZip,
      fromZip: data.fromZip,
      rooms: data.rooms,
      moveInDate: data.moveInDate,
    };

    emailjs
      .send("wywi_contact_service", "wywi_moving_template", templateParams)
      .then(
        function (response: { status: number; text: string }) {
          setFormSuccess(true);
          setFormError(false);
        },
        function (error: string) {
          setFormSuccess(false);
          setFormError(true);
        }
      );
  };
  return (
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
            <ErrorMsg msg="From zip is required" />
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
            <ErrorMsg msg="To zip is required" />
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
            <ErrorMsg msg="How many rooms is required" />
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
            <ErrorMsg msg="First name is required" />
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
            <ErrorMsg msg="Last name is required" />
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
            <ErrorMsg msg="Email is required" />
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
            <ErrorMsg msg="Telephone is required" />
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
            <ErrorMsg msg="Move in date is required" />
          )}
        </div>
      </div>

      <input
        type="submit"
        className="mt-4 border bg-primaryColor text-white px-4 py-2 cursor-pointer"
      />
    </form>
  );
};

export default MovingForm;
