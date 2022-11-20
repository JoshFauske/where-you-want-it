import React, { ReactNode } from "react";

type IconCardProps = {
  icon: ReactNode;
  text: string;
};

const IconCard = ({ icon, text }: IconCardProps) => {
  return (
    <div className="border-2 border-primaryColor">
      <div className="flex-flex-col p-2 sm:p-4">
        <i>{icon}</i>
        <div className="uppercase mt-4 text-center">{text}</div>
      </div>
    </div>
  );
};

export default IconCard;
