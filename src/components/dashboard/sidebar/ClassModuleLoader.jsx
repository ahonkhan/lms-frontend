import React, { useEffect, useState } from "react";
import ClassModule from "../../../pages/dashboard/course-details/components/classroom/ClassModule";
import { Navigate, useSearchParams } from "react-router-dom";
import courseModuleApiSlice from "../../../redux/api/courseModuleApiSlice";
import { LoaderPage } from "../../loader/Loader";

const ClassModuleLoader = () => {
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
    console.log(error);
    if (error?.status === 403) {
      return <Navigate to={"courses/" + error.data.course} />;
    }
  }
  return <ClassModule item={data?.modules} setCourseTitle={setTitle} />;
};

export default ClassModuleLoader;
