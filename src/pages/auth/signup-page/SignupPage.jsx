import React, { useEffect, useState } from "react";
import { InputFieldWithLabel } from "../../../components/input-field/InputField";
import { Link } from "react-router-dom";
import authApiSlice from "../../../redux/api/authApiSlice";
import toast from "react-hot-toast";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  // handle send otp
  const [
    sendSignupOTP,
    {
      data: signupOTPResponseData,
      isLoading: signupOTPLoading,
      error: signupOTPError,
      isError: isSignupOTPError,
    },
  ] = authApiSlice.useSendSignupOtpMutation();
  const [
    signup,
    {
      data: signupResponseData,
      isLoading: signupLoading,
      error: signupError,
      isError: isSignupError,
    },
  ] = authApiSlice.useSignupMutation();

  const sendSignupOtpHandler = async () => {
    try {
      await sendSignupOTP(email);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  useEffect(() => {
    if (isSignupOTPError) {
      if (signupOTPError.status === 400) {
        toast.error(signupOTPError.data?.errors[0]?.msg);
      } else if (signupOTPError.status === 409) {
        toast.error(signupOTPError.data.message);
      } else {
        toast.error("Something went worong!");
      }
    }
    if (signupOTPResponseData) {
      toast.success(signupOTPResponseData.message);
    }
  }, [signupOTPResponseData, isSignupOTPError]);

  // handle signup

  const handleSignup = async () => {
    if (password !== retypePassword) {
      toast.error("Password not matched!");
    }
    console.log(fullName);

    try {
      await signup({ email, password, verificationCode, fullName });
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  useEffect(() => {
    if (isSignupError) {
      if (signupError.status === 400) {
        if (signupError.data?.errors) {
          toast.error(signupError.data?.errors[0]?.msg);
        } else if (signupError.data?.message) {
          toast.error(signupError.data?.message);
        }
      } else if (signupError.status === 409) {
        toast.error(signupError.data.message);
      } else {
        if (signupError.data?.message) {
          toast.error(signupError.data?.message);
        } else {
          toast.error("Something went worong!");
        }
      }
    }
    if (signupResponseData) {
      toast.success(signupResponseData.message);
      location.replace("/dashboard");
    }
  }, [signupResponseData, isSignupError]);

  return (
    <div className="site-container">
      <div className="flex mt-section flex-col w-full md:w-[500px] xl:w-[550px] 2xl:w-[600px] 3xl:w-[650px] mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-base-2 rounded-2xl shadow-xl">
        <div className="flex flex-row gap-3 pb-4">
          <h1 className="text-3xl font-bold  my-auto">Create an account</h1>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-y-4"
        >
          <InputFieldWithLabel
            label={"Full name"}
            type={"text"}
            placeholder={"Your full name"}
            onChange={(e) => setFullName(e.target.value)}
          />

          <div className="flex justify-between flex-col sm:flex-row w-full items-end gap-x-4 gap-y-4">
            <InputFieldWithLabel
              label={"Your email"}
              type={"email"}
              placeholder={"Your email"}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative h-fit shrink-0">
              <button
                onClick={() => sendSignupOtpHandler()}
                type="button"
                className="text-[#FFFFFF]   bg-primary outline-none active:scale-[0.98] duration-300 font-medium rounded-lg text-base px-5 py-2.5 text-center"
              >
                Send code
              </button>

              {signupOTPLoading && (
                <div className="absolute w-full h-full bg-opacity-60 bg-black flex items-center justify-center z-[10] top-0 left-0 rounded-lg">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="mr-2 animate-spin"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                  </svg>
                </div>
              )}
            </div>
          </div>
          <InputFieldWithLabel
            label={"Verification code"}
            type={"text"}
            placeholder={"Verification code"}
            onChange={(e) => setVerificationCode(e.target.value)}
          />
          <InputFieldWithLabel
            label={"Password"}
            type={"password"}
            placeholder={"Your password"}
            onChange={(e) => setPassword(e.target.value)}
          />

          <InputFieldWithLabel
            label={"Retype Password"}
            type={"Retype password"}
            placeholder={"Retype password"}
            onChange={(e) => setRetypePassword(e.target.value)}
          />

          <div className="relative h-fit w-full  mt-1  mb-6">
            <button
              onClick={() => handleSignup()}
              type="submit"
              className="w-full  text-[#FFFFFF] bg-primary outline-none active:scale-[0.98] duration-300 font-medium rounded-lg text-base px-5 py-2.5 text-center"
            >
              Signup
            </button>
            {signupLoading && (
              <div className="absolute w-full h-full bg-opacity-60 bg-black flex items-center justify-center z-[10] top-0 left-0 rounded-lg">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="mr-2 animate-spin"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                </svg>
              </div>
            )}
          </div>
          <div className="text-sm font-light text-[#818793] ">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-primary hover:underline"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
