import React, { useContext, useEffect } from "react";
import MyCourses from "./components/MyCourses";
// import RecomendedCourses from "./components/RecomendedCourses";
import courseApiSlice from "../../../redux/api/courseApiSlice";
import { GetAuthContext } from "../../../contexts/AuthContext";
import { LoaderPage } from "../../../components/loader/Loader";
import EnrolledCourses from "./components/EnrolledCourses";

const DashboardCourses = () => {
  const { isLoading } = courseApiSlice.useFetchAllCourseForAdminQuery();
  const authContext = useContext(GetAuthContext);

  if (isLoading) {
    return <LoaderPage />;
  }

  return (
    <>
      {authContext.user.role === "customer" ? (
        <>
          <EnrolledCourses />
          {/* <RecomendedCourses /> */}
        </>
      ) : (
        <MyCourses />
      )}
      <div className="mt-content"></div>
    </>
  );
};

export default DashboardCourses;
