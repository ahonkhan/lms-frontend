import React, { useEffect } from "react";
import { CourseInfo } from "./components/course-details-info/CourseInfo";
import CourseModuleList from "./components/course-modules/CourseModuleList";
import { BackButton } from "../../../components/button/Button";
import { useParams } from "react-router-dom";
import courseApiSlice from "../../../redux/api/courseApiSlice";
import { LoaderPage, NotFoundPage } from "../../../components/loader/Loader";
const DashboardCoursesDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const params = useParams();
  const courseID = params.slug;
  const { data, isSuccess, isError, isLoading } =
    courseApiSlice.useFetchSingleCourseQuery(courseID);

  if (isLoading) {
    return <LoaderPage />;
  }
  if (isError) {
    return <NotFoundPage title="Course not found" />;
  }
  return (
    <div className="from-bottom">
      <BackButton />
      <div className="mt-content"></div>
      <CourseInfo course={data?.course} />
      <CourseModuleList />
    </div>
  );
};

export default DashboardCoursesDetails;
