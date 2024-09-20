import React from "react";
import { MdOutlineCameraAlt } from "react-icons/md";
import { InputFieldWithLabel } from "../../../../components/input-field/InputField";

const BasicInfo = () => {
  return (
    <div className="bg-base-3 bg-opacity-30 rounded-md">
      <div className="profile-info-edit sub-container bg-base-2 bg-opacity-50 py-section rounded-md">
        <div className="flex items-center justify-center">
          <div className="profile-pic relative flex border-4 border-base-3  border-opacity-45 items-center overflow-hidden justify-center w-[110px] h-[110px] rounded-full">
            <img
              src="https://static.vecteezy.com/system/resources/previews/024/354/241/non_2x/happy-girl-standing-in-creative-office-illustration-ai-generative-free-photo.jpg"
              alt=""
              className="h-full w-full object-cover rounded-full"
            />
            <div className="absolute bg-black bg-opacity-60 h-[35%] top-[50%] translate-y-[50%] flex justify-center items-center left-0 w-full z-[100]">
              <button className="text-xl">
                <MdOutlineCameraAlt />
              </button>
            </div>
          </div>
        </div>

        {/* user info */}

        <div className="user-info px-4 mt-content">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="grid grid-cols-1 gap-y-4"
          >
            <div className="input-group grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-4">
              <InputFieldWithLabel
                type={"text"}
                placeholder={"Full name"}
                label={"Full Name"}
              />
              <InputFieldWithLabel
                type={"text"}
                placeholder={"Phone number"}
                label={"Phone number"}
              />
            </div>
            <div className="input-group grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-4">
              <InputFieldWithLabel
                type={"text"}
                placeholder={"Primary email"}
                label={"Primary email"}
              />
              <InputFieldWithLabel
                type={"text"}
                placeholder={"Secondary email"}
                label={"Secondary email"}
              />
            </div>
            <div className="input-group grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-4">
              <InputFieldWithLabel
                type={"text"}
                placeholder={"Gender"}
                label={"Gender"}
              />
              <InputFieldWithLabel
                type={"text"}
                placeholder={"Current address"}
                label={"Current address"}
              />
            </div>
            <div className="flex justify-end">
              <button className="bg-primary px-6 py-2 rounded-md text-white duration-300 active:scale-[0.98]">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
