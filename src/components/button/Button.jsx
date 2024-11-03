import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

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

export const ButtonPrimary = ({
  children,
  width = "full",
  link = false,
  path = "",
  ...props
}) => {
  if (link) {
    return (
      <Link
        to={path}
        {...props}
        className={`bg-primary w-full text-center block ${
          width === "auto" && "w-auto"
        } ${
          width === "full" && "w-full"
        } px-8 py-2 duration-200  text-white  rounded-lg active:scale-[0.98]`}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        {...props}
        className={`bg-primary w-full ${width === "auto" && "w-auto"} ${
          width === "full" && "w-full"
        } px-8 py-2 duration-200  text-white  rounded-lg active:scale-[0.98]`}
      >
        {children}
      </button>
    );
  }
};
export const ButtonSecondary = ({
  children,
  width = "full",
  link = false,
  path = "",
  ...props
}) => {
  if (link) {
    return (
      <Link
        to={path}
        {...props}
        className={`bg-teal-500 w-full text-center block ${
          width === "auto" && "w-auto"
        } ${
          width === "full" && "w-full"
        } px-8 py-2 duration-200  text-white  rounded-lg active:scale-[0.98]`}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        {...props}
        className={`bg-teal-500 w-full ${width === "auto" && "w-auto"} ${
          width === "full" && "w-full"
        } px-8 py-2 duration-200  text-white  rounded-lg active:scale-[0.98]`}
      >
        {children}
      </button>
    );
  }
};
