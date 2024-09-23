import React from "react";
import { InputFieldWithLabel } from "../../../components/input-field/InputField";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="site-container">
      <div class="flex mt-section flex-col w-full md:w-[500px] xl:w-[550px] 2xl:w-[600px] 3xl:w-[650px] mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-base-2 rounded-2xl shadow-xl">
        <div class="flex flex-row gap-3 pb-4">
          <h1 class="text-3xl font-bold  my-auto">Create an account</h1>
        </div>

        <form class="flex flex-col gap-y-4">
          <InputFieldWithLabel
            label={"Full name"}
            type={"text"}
            placeholder={"Your full name"}
          />

          <div className="flex justify-between flex-col sm:flex-row w-full items-end gap-x-4 gap-y-4">
            <InputFieldWithLabel
              label={"Your email"}
              type={"email"}
              placeholder={"Your email"}
            />
            <button
              type="button"
              class="text-[#FFFFFF] shrink-0  bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-2.5 text-center"
            >
              Send code
            </button>
          </div>
          <InputFieldWithLabel
            label={"Verification code"}
            type={"text"}
            placeholder={"Verification code"}
          />
          <InputFieldWithLabel
            label={"Password"}
            type={"password"}
            placeholder={"Your password"}
          />

          <InputFieldWithLabel
            label={"Retype Password"}
            type={"Retype password"}
            placeholder={"Retype password"}
          />

          <button
            type="submit"
            class="w-full mt-1  text-[#FFFFFF] bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-2.5 text-center mb-6"
          >
            Signup
          </button>
          <div class="text-sm font-light text-[#818793] ">
            Already have an account?{" "}
            <Link to="/login" class="font-medium text-primary hover:underline">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
