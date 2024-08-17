import React, { useEffect } from "react";
import { SectionTitle } from "../../components/typography/Typography";
import { CourseCard } from "../../components/card/CourseCard";

export const CoursePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="site-container mt-section">
        <SectionTitle>আমাদের কোর্স সমূহ</SectionTitle>
        <div className="course-wrapper bg-base-2 p-4 my-4">
          <div className="title text-2xl font-medium text-center bg-primary rounded-xl  my-4 md:font-semibold text-white py-4">
            Web and app development
          </div>
          <div className="course-list-wrapper pt-4 grid gap-x-8 gap-y-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {[...Array(5)].map((item) => (
              <CourseCard />
            ))}
          </div>
        </div>
        <div className="course-wrapper bg-base-2 p-4 my-4">
          <div className="title text-2xl font-medium text-center bg-primary rounded-xl  my-4 md:font-semibold text-white py-4">
            Digitl marketing
          </div>
          <div className="course-list-wrapper pt-4 grid gap-x-8 gap-y-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {[...Array(5)].map((item) => (
              <CourseCard />
            ))}
          </div>
        </div>
        <div className="course-wrapper bg-base-2 p-4 my-4">
          <div className="title text-2xl font-medium text-center bg-primary rounded-xl  my-4 md:font-semibold text-white py-4">
            Grphics design
          </div>
          <div className="course-list-wrapper pt-4 grid gap-x-8 gap-y-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {[...Array(5)].map((item) => (
              <CourseCard />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
