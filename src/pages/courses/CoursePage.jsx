import React, { useEffect } from "react";
import { SectionTitle } from "../../components/typography/Typography";
import { CourseCard } from "../../components/card/CourseCard";
import courseApiSlice from "../../redux/api/courseApiSlice";
import { LoaderPage } from "../../components/loader/Loader";

export const CoursePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, isLoading } = courseApiSlice.useGetAllCategoryWithCourseQuery();
  return (
    <>
      <div className="site-container mt-section">
        <SectionTitle>আমাদের কোর্স সমূহ</SectionTitle>
        {isLoading ? (
          <LoaderPage />
        ) : (
          data?.categories.map((item) => (
            <div key={item?._id} className="course-wrapper bg-base-2 p-4 my-4">
              <div className="title capitalize text-2xl font-medium text-center bg-primary rounded-xl  my-4 md:font-semibold text-white py-4">
                {item?.name}
              </div>

              <div className="course-list-wrapper pt-4 grid gap-x-8 gap-y-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                {item?.courses?.length === 0 ? (
                  <div className="">No course found</div>
                ) : (
                  item?.courses.map((course) => (
                    <CourseCard key={course?._id} item={course} />
                  ))
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};
