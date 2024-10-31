import React, { useEffect, useState } from "react";
import { InputFieldWithLabel } from "../../../components/input-field/InputField";
import { Link } from "react-router-dom";
import { ButtonPrimary } from "../../../components/button/Button";
import { ButtonLoader } from "../../../components/loader/Loader";
import authApiSlice from "../../../redux/api/authApiSlice";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [
    login,
    {
      data: loginResponseData,
      isLoading: loginLoading,
      error: loginError,
      isError: isLoginError,
    },
  ] = authApiSlice.useLoginMutation();

  const handleLogin = async () => {
    try {
      await login({ email, password });
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  useEffect(() => {
    if (isLoginError) {
      if (loginError.status === 400) {
        if (loginError.data?.errors) {
          toast.error(loginError.data?.errors[0]?.msg);
        } else if (loginError.data?.message) {
          toast.error(loginError.data?.message);
        }
      } else if (loginError.status === 409) {
        toast.error(loginError.data.message);
      } else {
        if (loginError.data?.message) {
          toast.error(loginError.data?.message);
        } else {
          toast.error("Something went worong!");
        }
      }
    }
    if (loginResponseData) {
      localStorage.setItem("accessToken", loginResponseData.access_token);
      toast.success(loginResponseData.message);
      location.replace(localStorage.getItem("currentRoute") || "/dashboard");
    }
  }, [isLoginError, loginResponseData]);
  return (
    <div className="site-container">
      <div className="flex mt-section flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-[600px] 3xl:w-[650px] mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-base-2 rounded-2xl shadow-xl">
        <div className="flex flex-row gap-3 pb-4">
          <h1 className="text-3xl font-bold  my-auto">Welcome back</h1>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-y-4"
        >
          <InputFieldWithLabel
            label={"Your email"}
            type={"email"}
            placeholder={"Your email"}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputFieldWithLabel
            label={"Password"}
            type={"password"}
            placeholder={"Your Password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="text-sm font-light text-[#818793] ">
            Don&apos;t remember your password?{" "}
            <Link
              to={"/reset-password"}
              className="font-medium text-primary hover:underline"
            >
              Reset now
            </Link>
          </div>

          <div className="relative h-fit w-full">
            <ButtonPrimary onClick={handleLogin}>Login</ButtonPrimary>
            {loginLoading && <ButtonLoader />}
          </div>
          <div className="text-sm font-light text-[#818793] ">
            Don&apos;t have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-primary hover:underline"
            >
              Signup
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
