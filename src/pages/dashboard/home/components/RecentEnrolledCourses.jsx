import React from "react";
import {
  SectionTitle,
  SectionTitleDashboard,
} from "../../../../components/typography/Typography";
import { RecentCourseCard } from "../../../../components/card/CourseCard";

export const RecentEnrolledCourses = () => {
  return (
    <div className="mt-content">
      <SectionTitleDashboard>Recent enrolled courses</SectionTitleDashboard>
      <div className="course-list mt-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-4">
        <RecentCourseCard />
        <RecentCourseCard />
        <RecentCourseCard />
        <RecentCourseCard />
      </div>
    </div>
  );
};
