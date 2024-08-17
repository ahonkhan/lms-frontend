import React, { useEffect } from "react";
import { CourseInfo } from "./components/course-details-info/CourseInfo";
import { CourseModules } from "./components/course-moules/CourseModules";

export const CourseDetailsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <CourseInfo />
      <CourseModules />
      

    </>
  );
};
