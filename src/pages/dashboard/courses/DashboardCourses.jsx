import React, { useContext, useEffect } from "react";
import MyCourses from "./components/MyCourses";
import RecomendedCourses from "./components/RecomendedCourses";
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
      {authContext.user.role === "customer" ? (
        <>
          <MyCourses />
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
