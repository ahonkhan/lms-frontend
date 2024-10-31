import React, { useEffect } from "react";
import { CourseInfo } from "./components/course-details-info/CourseInfo";
import { CourseModules } from "./components/course-moules/CourseModules";
import courseApiSlice from "../../redux/api/courseApiSlice";
import { useParams } from "react-router-dom";
import { LoaderPage } from "../../components/loader/Loader";

export const CourseDetailsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const params = useParams();
  const [loadData, { data, isLoading, error }] =
    courseApiSlice.useLazyGetCourseDetailsQuery();
  useEffect(() => {
    loadData(params.slug);
  }, [params.slug]);
  if (isLoading) {
    return <LoaderPage />;
  }
  return (
    <>
      <CourseInfo
        course={data?.course}
        lessonCount={data?.lessons?.length || 0}
        enrolled={data?.enrolled}
        moduleCount={data?.modules?.length || 0}
      />
      <CourseModules modules={data?.modules} />
    </>
  );
};
