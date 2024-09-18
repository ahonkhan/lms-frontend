import React from "react";
import { CourseCategory } from "./CourseCategory";
import { GrFormNextLink } from "react-icons/gr";
import { SectionTitleDashboard } from "../../../../../components/typography/Typography";
import { CourseCard } from "../../../../../components/card/CourseCard";
export const CoursesList = () => {
  return (
    <section id="all-courses">
      <div className="mt-content">
        <SectionTitleDashboard>Our Courses</SectionTitleDashboard>
        <CourseCategory />
        <div className="course-list-wrapper  mt-content grid gap-x-8 gap-y-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4">
          {[...Array(21)].map((item) => (
            <CourseCard />
          ))}
        </div>
      </div>
    </section>
  );
};
