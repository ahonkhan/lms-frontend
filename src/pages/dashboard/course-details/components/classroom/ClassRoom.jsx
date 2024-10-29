import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { BackButton } from "../../../../../components/button/Button";
import ClassModule from "./ClassModule";
import ClassVideo from "./ClassVideo";
import { Navigate, useSearchParams } from "react-router-dom";
import courseModuleApiSlice from "../../../../../redux/api/courseModuleApiSlice";
import { LoaderPage } from "../../../../../components/loader/Loader";

const ClassRoom = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [query] = useSearchParams();
  const { data, isLoading, isError, isSuccess, error } =
    courseModuleApiSlice.useFetchCourseModulesWithLessonsQuery(
      query.get("course")
    );

  const [title, setTitle] = useState("");
  useEffect(() => {
    if (isSuccess) {
      if (typeof setTitle === "function") {
        setTitle(data?.course?.name); // Eta call korar upor ekdom simple behavior check
      }
    }
  }, [setTitle, isSuccess]);

  if (isLoading) {
    return <LoaderPage />;
  }
  if (isError) {
    if (error?.status === 403) {
      return <Navigate to={"/courses/" + error.data.course} />;
    }
  }
  return (
    <div className="from-bottom">
      <div className="heading flex items-center gap-x-4">
        <BackButton />
        <div className="course-details">
          <h1 className="text-base xl:text-lg 2xl:text-xl font-medium text-gray-2">
            {title}
          </h1>
        </div>
      </div>

      <div className="course-play-area gap-y-4 mt-content  flex-col xl:flex-row flex gap-x-5 xl:gap-x-6 2xl:gap-x-10 justify-between">
        <ClassVideo />
        <div className="course-modules h-fit shrink-0 hidden xl:block rounded-md bg-opacity-50 bg-base-3">
          <ClassModule item={data?.modules} setCourseTitle={setTitle} />
        </div>
      </div>
      <div className="mt-content"></div>
    </div>
  );
};

export default ClassRoom;
