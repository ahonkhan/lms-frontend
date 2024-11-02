import React, { useContext, useEffect, useState } from "react";
import { BackButton, ButtonPrimary } from "../../../components/button/Button";
import { LessonCard } from "../../../components/card/LessonCard";
import { GetModalContext } from "../../../contexts/ModalContext";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moduleLessonApiSlice from "../../../redux/api/moduleLessonApiSlice";
import { LoaderPage } from "../../../components/loader/Loader";
import { GetAuthContext } from "../../../contexts/AuthContext";
import { addInitialCourseLesson } from "../../../redux/slice/courseSlice";

const ModuleLessonsPage = () => {
  const modalContext = useContext(GetModalContext);
  const authContext = useContext(GetAuthContext);
  const params = useParams();
  const dispatch = useDispatch();
  const { isLoading, isSuccess, data } =
    moduleLessonApiSlice.useFetchAllCourseModulesLessonsQuery(params.module);
  const [lessons, setLessons] = useState([]);
  const course = useSelector((state) => state.course);

  useEffect(() => {
    if (isSuccess && data?.moduleLessons) {
      if (course?.lessons[0]?._id !== data.moduleLessons[0]?._id) {
        dispatch(addInitialCourseLesson(data.moduleLessons));
      }
    }
  }, [isSuccess, data, dispatch]);

  // console.log(data?.moduleLessons);

  useEffect(() => {
    setLessons(course.lessons.filter((i) => i.courseModule === params.module));
  }, [course.lessons]);
  if (isLoading) {
    return <LoaderPage />;
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <BackButton />
        {authContext?.user?.role !== "customer" && (
          <div className="">
            <ButtonPrimary
              onClick={() => {
                modalContext.setCreateModuleLessonModal(true);
                modalContext.setModuleLessonCreateHelperID({
                  module: params.module,
                  course: params.course,
                });
              }}
            >
              Create lesson
            </ButtonPrimary>
          </div>
        )}
      </div>
      <div className="module-lessons mt-content">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
          {lessons.map((item, index) => (
            <LessonCard key={item?._id} item={item} serial={index + 1} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ModuleLessonsPage;
