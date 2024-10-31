import React, { useContext } from "react";
import { BackButton, ButtonPrimary } from "../../../components/button/Button";
import { LessonCard } from "../../../components/card/LessonCard";
import { GetModalContext } from "../../../contexts/ModalContext";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import moduleLessonApiSlice from "../../../redux/api/moduleLessonApiSlice";
import { LoaderPage } from "../../../components/loader/Loader";
import { GetAuthContext } from "../../../contexts/AuthContext";

const ModuleLessonsPage = () => {
  const modalContext = useContext(GetModalContext);
  const authContext = useContext(GetAuthContext);
  const params = useParams();
  const course = useSelector((state) => state.course);
  const { isLoading } =
    moduleLessonApiSlice.useFetchAllCourseModulesLessonsQuery(params.module);

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
          {course.lessons.map((item, index) => (
            <LessonCard key={item?._id} item={item} serial={index + 1} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ModuleLessonsPage;
