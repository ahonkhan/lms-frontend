import React from "react";
import { InputFieldWithLabel } from "../../../components/input-field/InputField";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="site-container">
      <div class="flex mt-section flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-[600px] 3xl:w-[650px] mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-base-2 rounded-2xl shadow-xl">
        <div class="flex flex-row gap-3 pb-4">
          <h1 class="text-3xl font-bold  my-auto">Welcome back</h1>
        </div>

        <form class="flex flex-col gap-y-4">
          <InputFieldWithLabel
            label={"Email"}
            type={"email"}
            placeholder={"Your email"}
          />

          <InputFieldWithLabel
            label={"Password"}
            type={"password"}
            placeholder={"Your password"}
          />
          <div class="text-sm font-light text-[#818793] ">
            Don&apos;t remember your password?{" "}
            <Link
              to={"/reset-password"}
              class="font-medium text-primary hover:underline"
            >
              Reset now
            </Link>
          </div>
          <button
            type="submit"
            class="w-full  text-[#FFFFFF] bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-2.5 text-center mb-6"
          >
            Login
          </button>
          <div class="text-sm font-light text-[#818793] ">
            Don&apos;t have an account?{" "}
            <Link to="/signup" class="font-medium text-primary hover:underline">
              Signup
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
