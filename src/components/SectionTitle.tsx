import React from "react";

type SectionTitleProps = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => {
  return <h2 className="font-bold text-2xl mb-5 text-center">{title}</h2>;
};

export default SectionTitle;
