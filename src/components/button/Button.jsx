import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  let navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-x-2 px-4 py-2 rounded text-white bg-base-3 bg-opacity-50 duration-200 active:scale-[0.98]"
    >
      <BsArrowLeft />
      <span>Back</span>
    </button>
  );
};
