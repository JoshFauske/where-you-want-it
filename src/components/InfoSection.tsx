import React, { ReactNode } from "react";

type InfoSectionProps = {
  icon: ReactNode;
  title: string;
  description: string;
  bgColor: string;
};

const InfoSection = ({
  icon,
  title,
  description,
  bgColor,
}: InfoSectionProps) => {
  return (
    <div className={`${bgColor} w-full p-4`}>
      <div className="flex flex-col">
        <div className="flex items-center mb-2">
          <i className="mr-2">{icon}</i>
          <p className="font-bold">{title}</p>
        </div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default InfoSection;
