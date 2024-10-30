import React, { useEffect, useState } from "react";
import { SectionTitle } from "../../../../components/typography/Typography";
import { CourseCategory } from "./CourseCategory";
import { CourseCard } from "../../../../components/card/CourseCard";
import courseApiSlice from "../../../../redux/api/courseApiSlice";
import toast from "react-hot-toast";
import { LoaderPage } from "../../../../components/loader/Loader";

export const CoursesList = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isFetching, setIsFetching] = useState(false);
  const [fetchCourse, { data, isLoading, isError }] =
    courseApiSlice.useLazyFetchAllCourseByCategoryQuery();
  useEffect(() => {
    setIsFetching(true);
    fetchCourse(activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    if (data) {
      setIsFetching(false);
    }
  }, [data]);

  return (
    <section id="teaching-process">
      <div className="site-container mt-section">
        <SectionTitle>আমাদের কোর্স সমুহঃ</SectionTitle>
        <CourseCategory
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        {isFetching ? (
          <LoaderPage />
        ) : data?.courses?.length === 0 ? (
          <div>No course found</div>
        ) : (
          <div className="course-list-wrapper  mt-section grid gap-x-8 gap-y-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {data?.courses.map((item) => (
              <CourseCard item={item} key={item?._id} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
