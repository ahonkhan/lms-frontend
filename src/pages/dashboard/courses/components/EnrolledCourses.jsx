import React, { useContext, useRef, useState } from "react";
import { SectionTitleDashboard } from "../../../../components/typography/Typography";
import { EnrolledCourseCard } from "../../../../components/card/CourseCard";
import courseApiSlice from "../../../../redux/api/courseApiSlice";
import { LoaderPage } from "../../../../components/loader/Loader";

const EnrolledCourses = () => {
  // console.log(data.orders);
  return (
    <div>
      <div className="">
        <div className="flex items-center justify-between">
          <SectionTitleDashboard>My courses</SectionTitleDashboard>
        </div>
        <GetCourses />
      </div>
    </div>
  );
};

const GetCourses = () => {
  const { data, isLoading, isError, error } =
    courseApiSlice.useGetMyCoursesQuery();
  if (isLoading) {
    return <LoaderPage />;
  }
  return (
    <div className="course-list mt-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-4">
      {data?.orders.map((item) => (
        <EnrolledCourseCard item={item?.course} key={item?._id} />
      ))}
    </div>
  );
};

export default EnrolledCourses;
