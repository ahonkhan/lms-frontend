import React from "react";
import { SectionTitleDashboard } from "../../../../components/typography/Typography";
import { RecentCourseCard } from "../../../../components/card/CourseCard";
import { ButtonPrimary } from "../../../../components/button/Button";

const MyCourses = () => {
  return (
    <div>
      <div className="">
        <div className="flex items-center justify-between">
          <SectionTitleDashboard>My courses</SectionTitleDashboard>
          <ButtonPrimary>Create new course</ButtonPrimary>
        </div>
        <div className="course-list mt-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-4">
          <RecentCourseCard />
          <RecentCourseCard />
          <RecentCourseCard />
          <RecentCourseCard />
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
