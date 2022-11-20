import React, { ReactNode } from "react";

type IconCardWithBtnProps = {
  icon: ReactNode;
  text: string;
};

const IconCardWithBtn = ({ icon, text }: IconCardWithBtnProps) => {
  return (
    <div className="border-2 border-primaryColor h-44">
      <div className="flex flex-col justify-between p-2 sm:p-4 h-full">
        <div className="uppercase text-center font-bold">{text}</div>
        <i>{icon}</i>
				<button className="text-white bg-black w-full">Read More</button>
      </div>
    </div>
  );
};

export default IconCardWithBtn;
