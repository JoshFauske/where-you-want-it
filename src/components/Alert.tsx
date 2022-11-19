import React from "react";

type AlertProps = {
  type: string;
  msg: string;
};

const Alert = ({ type, msg }: AlertProps) => {
	let styleClasses = ""
  switch (type) {
    case "success":
			styleClasses = "border-green-700 bg-green-100"
      break;
		case "error":
			styleClasses = "border-red-700 bg-red-100"
    default:
      break;
  }

  return <div className={`w-full p-3 mb-3 border-2 ${styleClasses}`}>{msg}</div>;
};

export default Alert;
