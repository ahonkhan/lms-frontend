import React from "react";
import MyCourses from "./components/MyCourses";
import RecomendedCourses from "./components/RecomendedCourses";
import { CoursesList } from "./components/courselist/CoursesList";

const DashboardCourses = () => {
  return (
    <>
      <MyCourses />
      <RecomendedCourses />
      <CoursesList />
      <div className="mt-content"></div>
    </>
  );
};

export default DashboardCourses;
