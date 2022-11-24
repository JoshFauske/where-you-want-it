import React from 'react'

type InputProps = {
  label: string;
  required: boolean;
  register: any;
  registerAs: string;
  type: string;
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

export default Input