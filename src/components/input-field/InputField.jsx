import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export const InputFieldWithLabel = ({
  label,
  type = "text",
  placeholder = "",
  ...props
}) => {
  return (
    <div className="input-field w-full">
      <p className="py-1">{label}</p>
      <input
        placeholder={placeholder}
        type={type}
        {...props}
        className="w-full border bg-base-3 border-base-3 py-2 rounded-md bg-opacity-50 outline-none px-2 text-gray-2"
      />
    </div>
  );
};
export const TextAreaFieldWithLabel = ({
  label,
  type = "text",
  placeholder = "",
  ...props
}) => {
  return (
    <div className="input-field w-full">
      <p className="py-1">{label}</p>

      <textarea
        {...props}
        placeholder={placeholder}
        name=""
        id=""
        className="w-full border min-h-[180px] bg-base-3 border-base-3 py-2 rounded-md bg-opacity-50 outline-none px-2 text-gray-2"
      ></textarea>
    </div>
  );
};

export const SelectFieldWithLabel = ({
  label,
  type = "text",
  placeholder = "",
  data,
  setSelectedData,
  selectedData,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const handleSelection = (item) => {
    setSelectedData(item);
    setOpen(false);
  };
  return (
    <div className="input-field w-full relative">
      <p className="py-1">{label}</p>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center border bg-base-3 border-base-3 py-2 rounded-md bg-opacity-50 outline-none px-2 text-gray-2"
      >
        {selectedData ? selectedData?.name : `Select ${label}`}
        <span className="text-lg">
          <IoIosArrowDown />
        </span>
      </button>
      {open && (
        <div className="w-full absolute top-full left-0 h-fit">
          <ul className="bg-base-3  mt-2 rounded px-2 py-2">
            {data.map((item) => (
              <li
                key={item?._id}
                onClick={() => handleSelection(item)}
                className="w-full hover:bg-base-2 cursor-pointer duration-100  flex justify-between items-center  py-2 rounded-md bg-opacity-50 outline-none px-2 text-gray-2"
              >
                {item?.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
