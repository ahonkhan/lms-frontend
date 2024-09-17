import React from "react";
import Overview from "./components/Overview";
import { RecentEnrolledCourses } from "./components/RecentEnrolledCourses";

export const DashboardHome = () => {
  return (
    <>
      <Overview />
      <RecentEnrolledCourses />
    </>
  );
};
