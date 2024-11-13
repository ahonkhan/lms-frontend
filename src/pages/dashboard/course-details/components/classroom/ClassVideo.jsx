import React, { useContext, useEffect, useState } from "react";
import { RiPlayList2Fill } from "react-icons/ri";
import ReactPlayer from "react-player";
import { GetRootContext } from "../../../../../contexts/RootContext";
import moduleLessonApiSlice from "../../../../../redux/api/moduleLessonApiSlice";
import { Navigate, useLocation, useSearchParams } from "react-router-dom";
import { LoaderPage } from "../../../../../components/loader/Loader";
import toast from "react-hot-toast";
import ClassVideoAction from "./ClassVideoAction";
import { useDispatch, useSelector } from "react-redux";
import { updateLessonProgress } from "../../../../../redux/slice/courseModuleSlice";
import VideoPlayer from "./VideoPlayer";

const ClassVideo = () => {
  const rootContext = useContext(GetRootContext);
  const location = useLocation();
  const [query] = useSearchParams();
  const dispatch = useDispatch();
  const [isFetching, setIsFetching] = useState(false); // Manual loading state
  const [getData, { data, isError, isSuccess, error }] =
    moduleLessonApiSlice.useLazyGetSingleModuleLessonQuery();
  const modules = useSelector((state) => state.courseModule);
  useEffect(() => {
    const lessonId = query.get("lesson");
    if (lessonId) {
      setIsFetching(true); // Set loading to true
      getData(lessonId).finally(() => setIsFetching(false)); // Reset loading on response
    }
  }, [query.toString()]);

  if (isFetching) {
    return <LoaderPage />;
  }



  return (
    <div className="course-play w-full h-fit ">
      <VideoPlayer lesson={data?.lesson} />
      <div className=" bg-base-3 bg-opacity-15 py-4 px-4">
        <div className="__action">
          <ClassVideoAction />
        </div>
        <div className="classroom-tabs mt-4 flex-wrap gap-y-4 border-b pb-4 border-b-base-3 flex items-center justify-between gap-x-4">
          <div className="flex items-center gap-x-4">
            <button className="bg-primary px-6 py-2 rounded text-white">
              Description
            </button>
            <button>Assignment</button>
          </div>
          <div className="xl:hidden">
            <button
              onClick={() => rootContext.setModuleOpen(true)}
              className="flex items-center gap-x-2 border border-primary px-3 text-primary py-1 rounded-full"
            >
              <span>Playlist</span>
              <RiPlayList2Fill />
            </button>
          </div>
        </div>
        <div className="tab-details mt-content">
          <h1 className="text-2xl font-medium text-white">
            {data?.lesson?.name}
          </h1>
          <p
            className="mt-4"
            dangerouslySetInnerHTML={{ __html: data?.lesson?.description }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default ClassVideo;
