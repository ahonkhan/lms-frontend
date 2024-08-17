import React from "react";
import { SectionTitle } from "../../../../components/typography/Typography";
import { CourseCategory } from "./CourseCategory";
import { GrFormNextLink } from "react-icons/gr";
import { CourseCard } from "../../../../components/card/CourseCard";
export const CoursesList = () => {
  return (
    <section id="teaching-process">
      <div className="site-container mt-section">
        <SectionTitle>আমাদের কোর্স সমুহঃ</SectionTitle>
        <CourseCategory />
        <div className="course-list-wrapper  mt-section grid gap-x-8 gap-y-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {[...Array(21)].map((item) => (
            <CourseCard />
          ))}
        </div>
      </div>
    </section>
  );
};
