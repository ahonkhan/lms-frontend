import React from "react";
import { MdOutlineCameraAlt } from "react-icons/md";
import { InputFieldWithLabel } from "../../../../components/input-field/InputField";

const ChangePassword = () => {
  return (
    <div className="bg-base-3 bg-opacity-30 rounded-md mt-content ">
      <div className="profile-info-edit sub-container bg-base-2 bg-opacity-50 py-10  rounded-md">
        {/* user info */}

        <div className="user-info px-4">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="grid grid-cols-1 gap-y-4"
          >
            <InputFieldWithLabel
              type={"text"}
              placeholder={"Current Password"}
              label={"Current Password"}
            />
            <InputFieldWithLabel
              type={"text"}
              placeholder={"New Password"}
              label={"New Password"}
            />

            <InputFieldWithLabel
              type={"text"}
              placeholder={"Confirm Password"}
              label={"Confirm Password"}
            />

            <div className="flex justify-end">
              <button className="bg-primary px-6 py-2 rounded-md text-white duration-300 active:scale-[0.98]">
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
