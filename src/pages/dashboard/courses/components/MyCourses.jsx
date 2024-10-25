import React, { useContext, useRef, useState } from "react";
import { SectionTitleDashboard } from "../../../../components/typography/Typography";
import { RecentCourseCard } from "../../../../components/card/CourseCard";
import { ButtonPrimary } from "../../../../components/button/Button";
import { GetModalContext } from "../../../../contexts/ModalContext";
import { useSelector } from "react-redux";

const MyCourses = () => {
  const modalContext = useContext(GetModalContext);
  const course = useSelector((state) => state.course);
  return (
    <div>
      <div className="">
        <div className="flex items-center justify-between">
          <SectionTitleDashboard>My courses</SectionTitleDashboard>
          <div className="">
            <ButtonPrimary
              onClick={() => modalContext.setCreateCourseModal(true)}
            >
              Create new course
            </ButtonPrimary>
          </div>
        </div>
        <div className="course-list mt-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-4">
          {course.courses.map((item) => (
            <RecentCourseCard item={item} key={item?._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
