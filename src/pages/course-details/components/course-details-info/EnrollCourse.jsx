import React, { useContext, useEffect, useState } from "react";
import { GrFormNextLink } from "react-icons/gr";
import { GetAuthContext } from "../../../../contexts/AuthContext";
import { Link, useParams } from "react-router-dom";
import enrollApiSlice from "../../../../redux/api/enrollApiSlice";
import { ButtonLoader } from "../../../../components/loader/Loader";
import toast from "react-hot-toast";

const EnrollCourse = () => {
  const authContext = useContext(GetAuthContext);
  const params = useParams();
  const [enroll, { data, isLoading, isSuccess, isError, error }] =
    enrollApiSlice.useEnrollMutation();
  const handleEnrollment = () => {
    const course = params.slug;
    const paymentMethod = "bkash";
    const successUrl = location.origin + "/enroll/process";
    const cancelUrl = location.origin + "/enroll/cancel";

    enroll({
      course: course,
      paymentMethod: paymentMethod,
      successUrl: successUrl,
      cancelUrl: cancelUrl,
    });
  };
  useEffect(() => {
    if (isSuccess) {
      if (data.url) {
        location.href = data?.url;
      } else {
        toast.error("Something went wrong.");
      }
    }

    if (isError) {
      toast.error("Something went wrong.");
    }
  }, [isSuccess, isError]);
  if (authContext.user) {
    return (
      <div className="relative">
        <button
          onClick={() => handleEnrollment()}
          className="bg-primary active:scale-[0.98] duration-150 group gap-x-2 px-16 rounded-lg font-medium text-white text-center flex items-center justify-center py-2"
        >
          Enroll now
          <span className="text-xl group-hover:translate-x-1 duration-300">
            <GrFormNextLink />
          </span>
        </button>
        {isLoading && <ButtonLoader />}
      </div>
    );
  } else {
    return (
      <Link
        onClick={() => localStorage.setItem("currentRoute", location.href)}
        to={"/login"}
        className="bg-primary active:scale-[0.98] duration-150 group gap-x-2 px-16 rounded-lg font-medium text-white text-center flex items-center justify-center py-2"
      >
        Login to enroll
        <span className="text-xl group-hover:translate-x-1 duration-300">
          <GrFormNextLink />
        </span>
      </Link>
    );
  }
};

export default EnrollCourse;
