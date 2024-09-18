import React, { useEffect } from "react";
import { CourseInfo } from "./components/course-details-info/CourseInfo";
import CourseModuleList from "./components/course-modules/CourseModuleList";
import { BackButton } from "../../../components/button/Button";
const DashboardCoursesDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="from-bottom">
      <BackButton />
      <div className="mt-content"></div>
      <CourseInfo />
      <CourseModuleList />
    </div>
  );
};

export default DashboardCoursesDetails;
