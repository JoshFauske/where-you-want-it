import React from 'react'

type ErrorProps = {
  msg: string;
};

const ErrorMsg = ({ msg }: ErrorProps) => (
  <p role="alert" className="text-sm text-red-600 italic">
    {msg}
  </p>
);

export default ErrorMsg