import React, { useEffect, useState } from "react";
import { InputFieldWithLabel } from "../../../components/input-field/InputField";
import { Link } from "react-router-dom";
import authApiSlice from "../../../redux/api/authApiSlice";
import toast from "react-hot-toast";
import { ButtonPrimary } from "../../../components/button/Button";
import { ButtonLoader } from "../../../components/loader/Loader";

const SendResetLinkPage = () => {
  const [email, setEmail] = useState("");
  const [sendResetLink, { data, isSuccess, isError, isLoading, error }] =
    authApiSlice.useSendResetPasswordLinkMutation();
  const handleReset = () => {
    sendResetLink({
      email: email,
      base_url: location.origin + "/reset-password",
    });
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success("Password reset link sent to your email");
    }
    if (isError) {
      if (error?.data?.errors) {
        toast.error(error?.data?.errors[0].msg);
      } else {
        toast.error(error?.data?.message);
      }
    }
  }, [isError, isSuccess]);
  return (
    <div className="site-container">
      <div className="flex mt-section flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-[600px] 3xl:w-[650px] mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-base-2 rounded-2xl shadow-xl">
        <div className="flex flex-row gap-3 pb-4">
          <h1 className="text-3xl font-bold my-auto">Reset password</h1>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-y-4"
        >
          <InputFieldWithLabel
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label={"Email"}
            type={"email"}
            placeholder={"Your email"}
          />

          <div className="relative">
            <ButtonPrimary onClick={handleReset}>Send Reset Link</ButtonPrimary>

            {isLoading && <ButtonLoader />}
          </div>
          <div className="text-sm font-light text-[#818793] ">
            Remembered your password?{" "}
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

export default SendResetLinkPage;
