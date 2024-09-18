import React from "react";
import { CourseInfo } from "./components/course-details-info/CourseInfo";
import CourseModuleList from "./components/course-modules/CourseModuleList";
import { BackButton } from "../../../components/button/Button";
const DashboardCoursesDetails = () => {
  return (
    <div className="">
      <BackButton />
      <div className="mt-content"></div>
      <CourseInfo />
      <CourseModuleList />
    </div>
  );
};

export default DashboardCoursesDetails;
