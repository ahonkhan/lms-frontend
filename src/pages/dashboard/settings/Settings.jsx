import React from "react";
import { MdOutlineCameraAlt } from "react-icons/md";
import { InputFieldWithLabel } from "../../../components/input-field/InputField";
import BasicInfo from "./components/BasicInfo";
import ChangePassword from "./components/ChangePassword";

const Settings = () => {
  return (
    <>
      <BasicInfo />
      <ChangePassword />

      <div className="mt-content"></div>
    </>
  );
};

export default Settings;
