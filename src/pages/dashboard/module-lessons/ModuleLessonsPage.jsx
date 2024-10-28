import React, { useContext } from "react";
import { BackButton, ButtonPrimary } from "../../../components/button/Button";
import { MdPlayCircleOutline } from "react-icons/md";
import { LessonCard } from "../../../components/card/LessonCard";
import { GetModalContext } from "../../../contexts/ModalContext";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import moduleLessonApiSlice from "../../../redux/api/moduleLessonApiSlice";
import { LoaderPage } from "../../../components/loader/Loader";

const ModuleLessonsPage = () => {
  const modalContext = useContext(GetModalContext);
  const params = useParams();
  const course = useSelector((state) => state.course);
  const { isLoading, data } =
    moduleLessonApiSlice.useFetchAllCourseModulesLessonsQuery(params.module);

  if (isLoading) {
    return <LoaderPage />;
  }

  console.log(course.lessons);
  return (
    <>
      <div className="flex justify-between items-center">
        <BackButton />
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
      </div>
      <div className="module-lessons mt-content">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
          <LessonCard />
        </div>
      </div>
    </>
  );
};

export default ModuleLessonsPage;
