import React from "react";
import { InputFieldWithLabel } from "../../../components/input-field/InputField";

const ResetPasswordPage = () => {
  return (
    <div className="site-container">
      <div class="flex mt-section flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-[600px] 3xl:w-[650px] mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-base-2 rounded-2xl shadow-xl">
        <div class="flex flex-row gap-3 pb-4">
          <h1 class="text-3xl font-bold  my-auto">Reset password</h1>
        </div>

        <form class="flex flex-col gap-y-4">
          <InputFieldWithLabel
            label={"Set password"}
            type={"password"}
            placeholder={"Set password"}
          />
          <InputFieldWithLabel
            label={"Retype password"}
            type={"password"}
            placeholder={"Retype password"}
          />

          <button
            type="submit"
            class="w-full  text-[#FFFFFF] bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-2.5 text-center mb-6"
          >
            Reset now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
