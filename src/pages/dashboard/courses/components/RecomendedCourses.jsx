import React from "react";
import { SectionTitleDashboard } from "../../../../components/typography/Typography";
import { CourseCard } from "../../../../components/card/CourseCard";

const RecomendedCourses = () => {
  return (
    <div className="mt-content">
      <SectionTitleDashboard>Recomended courses</SectionTitleDashboard>
      <div className="course-list mt-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-4">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
};

export default RecomendedCourses;
