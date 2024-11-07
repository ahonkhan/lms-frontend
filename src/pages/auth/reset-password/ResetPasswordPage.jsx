import React, { useEffect, useState } from "react";
import { InputFieldWithLabel } from "../../../components/input-field/InputField";
import { Link, useParams } from "react-router-dom";
import { ButtonPrimary } from "../../../components/button/Button";
import authApiSlice from "../../../redux/api/authApiSlice";
import toast from "react-hot-toast";
import { ButtonLoader } from "../../../components/loader/Loader";

const ResetPasswordPage = () => {
  const params = useParams();
  const token = params.token;
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [resetPassword, { data, isLoading, isSuccess, isError, error }] =
    authApiSlice.useResetPasswordMutation();
  const handleReset = () => {
    resetPassword({
      token: token,
      newPassword: password,
      retypePassword: retypePassword,
    });
  };

  useEffect(() => {
    if (isError) {
      if (error?.data?.errors) {
        toast.error(error?.data?.errors[0].msg);
      } else {
        toast.error(error?.data?.message);
      }
    }
    if (isSuccess) {
      toast.success(
        "We have changed your password,not you can login with your new password."
      );

      console.log(data);
    }
  }, [isSuccess, isError]);
  return (
    <div className="site-container">
      <div className="flex mt-section flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-[600px] 3xl:w-[650px] mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-base-2 rounded-2xl shadow-xl">
        <div className="flex flex-row gap-3 pb-4">
          <h1 className="text-3xl font-bold  my-auto">Reset password</h1>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-y-4"
        >
          <InputFieldWithLabel
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label={"Set password"}
            type={"password"}
            placeholder={"Set password"}
          />
          <InputFieldWithLabel
            value={retypePassword}
            onChange={(e) => setRetypePassword(e.target.value)}
            label={"Retype password"}
            type={"password"}
            placeholder={"Retype password"}
          />

          <div className="relative">
            <ButtonPrimary onClick={handleReset}>Reset now</ButtonPrimary>

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
          <div className="text-sm font-light text-[#818793] ">
            Link expired?{" "}
            <Link
              to="/reset-password"
              className="font-medium text-primary hover:underline"
            >
              Send reset link
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
