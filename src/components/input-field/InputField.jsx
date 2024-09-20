import React from "react";

export const InputFieldWithLabel = ({ label, type, placeholder }) => {
  return (
    <div className="input-field">
      <p className="py-1">{label}</p>
      <input
        type="text"
        className="w-full border bg-base-3 border-base-3 py-2 rounded-md bg-opacity-50 outline-none px-2 text-gray-2"
      />
    </div>
  );
};
