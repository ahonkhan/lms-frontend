import React from "react";
import Overview from "./components/Overview";
import { RecentEnrolledCourses } from "./components/RecentEnrolledCourses";
import ClassJoining from "./components/ClassJoining";

export const DashboardHome = () => {
  return (
    <>
      <Overview />
      <RecentEnrolledCourses />
      <ClassJoining />
      <div className="mt-content"></div>
    </>
  );
};
