import React from "react";

export const TextPrimary = ({ children }) => {
  return <span className="text-primary">{children}</span>;
};

export const SectionTitle = ({ children }) => {
  return (
    <div className="section-title text-center">
      <h1 className="text-light text-[28px] md:text-[36px] lg:text-[44px] font-semibold">
        {children}
      </h1>
    </div>
  );
};
