import React, { useEffect } from "react";
import {
  ButtonPrimary,
  ButtonSecondary,
} from "../../../../../components/button/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import moduleLessonApiSlice from "../../../../../redux/api/moduleLessonApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { updateLessonProgress } from "../../../../../redux/slice/courseModuleSlice";

const ClassVideoAction = () => {
  const [query] = useSearchParams();
  const lessonId = query.get("lesson");
  const course = query.get("course");
  const dispatch = useDispatch();
  const playlistLessons = useSelector((state) => state.courseModule);
  const navigate = useNavigate();
  const [
    markAsCompleted,
    { data, isLoading, isSuccess: markSuccess, isError },
  ] = moduleLessonApiSlice.useMarkAsCompletedMutation();
  const handleNext = (lessonId) => {
    markAsCompleted(lessonId);
  };
  useEffect(() => {
    if (markSuccess) {
      if (data?.lesson) {
        dispatch(
          updateLessonProgress({
            lesson: data?.lesson,
            status: "completed",
          })
        );

        const currentModule = data?.lesson?.courseModule;
        console.log(playlistLessons.playlist);
        // const moduleLessonLength = playlistLessons.playlist;
        const currentModuleIndex = playlistLessons.playlist.findIndex(
          (module) => module._id === currentModule
        );

        const totalItems =
          playlistLessons.playlist[currentModuleIndex].lessons.length; //8 lessons
        let nextLesson = {};
        let nextModule = {};
        const currentLessonPosition = playlistLessons.playlist[
          currentModuleIndex
        ].lessons.findIndex((lesson) => lesson._id === lessonId);

        if (totalItems - 1 > currentLessonPosition) {
          // greater now we can change the lesson id
          nextLesson =
            playlistLessons.playlist[currentModuleIndex].lessons[
              currentLessonPosition + 1
            ];
          nextModule._id = nextLesson.courseModule;
        } else {
          if (playlistLessons.playlist.length > currentModuleIndex + 1) {
            nextModule = playlistLessons.playlist[currentModuleIndex + 1];
            if (nextModule.lessons) {
              nextLesson = nextModule.lessons[0];
            }
          }
        }

        // console.log(nextLesson, nextModule);
        if (nextLesson) {
          goToNextLesson({
            course: course,
            module: nextModule?._id,
            lesson: nextLesson?._id,
          });
        }
      }
    }
  }, [markSuccess]);

  const goToNextLesson = ({ course, module, lesson }) => {
    const path = `/dashboard/classroom?course=${course}&module=${module}&lesson=${lesson}`;
    navigate(path);

    // console.log(path);
  };
  return (
    <div className="grid grid-cols-2 gap-4">
      <ButtonPrimary>Previous</ButtonPrimary>

      <ButtonSecondary onClick={() => handleNext(lessonId)}>
        Next
      </ButtonSecondary>
    </div>
  );
};

export default ClassVideoAction;
