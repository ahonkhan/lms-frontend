import React, { useContext, useEffect } from "react";
import MyCourses from "./components/MyCourses";
import RecomendedCourses from "./components/RecomendedCourses";
import { CoursesList } from "./components/courselist/CoursesList";
import courseApiSlice from "../../../redux/api/courseApiSlice";
import { GetAuthContext } from "../../../contexts/AuthContext";
import { LoaderPage } from "../../../components/loader/Loader";

const DashboardCourses = () => {
  const { isLoading } = courseApiSlice.useFetchAllCourseQuery();
  const authContext = useContext(GetAuthContext);

  if (isLoading) {
    return <LoaderPage />;
  }
  return (
    <>
      <MyCourses />
      {authContext.user.role === "customer" && (
        <>
          <RecomendedCourses />
          <CoursesList />
        </>
      )}
      <div className="mt-content"></div>
    </>
  );
};

export default DashboardCourses;
