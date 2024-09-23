import React from "react";
import { InputFieldWithLabel } from "../../../components/input-field/InputField";
import { Link } from "react-router-dom";

const SendResetLinkPage = () => {
  return (
    <div className="site-container">
      <div class="flex mt-section flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-[600px] 3xl:w-[650px] mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-base-2 rounded-2xl shadow-xl">
        <div class="flex flex-row gap-3 pb-4">
          <h1 class="text-3xl font-bold text-center my-auto">Reset password</h1>
        </div>

        <form class="flex flex-col gap-y-4">
          <InputFieldWithLabel
            label={"Email"}
            type={"email"}
            placeholder={"Your email"}
          />

          <button
            type="submit"
            class="w-full  text-[#FFFFFF] bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-2.5 text-center mb-6"
          >
            Send Reset Link
          </button>
          <div class="text-sm font-light text-[#818793] ">
            Remembered your password?{" "}
            <Link to="/login" class="font-medium text-primary hover:underline">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendResetLinkPage;
