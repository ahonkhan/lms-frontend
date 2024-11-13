import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { useDispatch } from "react-redux";
import { updateLessonProgress } from "../../../../../redux/slice/courseModuleSlice";

const VideoPlayer = ({ lesson }) => {
  //   console.log(lesson);
  const dispatch = useDispatch();
  // if (!isFetching) {
  //   if (data?.lesson) {
  //   dispatch(
  //     updateLessonProgress({ lesson: data?.lesson, status: "playing" })
  //   );
  //   }
  // }

  useEffect(() => {
    dispatch(updateLessonProgress({ lesson: lesson, status: "playing" }));
  }, [lesson]);
  return (
    <div className="video-player w-full h-[310px]  sm:h-[400px] md:h-[370px] lg:h-[550px] xl:h-[450px] 2xl:h-[650px]">
      {lesson?.video ? (
        <ReactPlayer
          controls
          url={lesson?.video}
          width={"100%"}
          height={"100%"}
        />
      ) : (
        <div className="w-full h-full bg-base-2 flex items-center justify-center">
          Video not published
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
