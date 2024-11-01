import React, { useContext, useEffect, useState } from "react";
import { RiPlayList2Fill } from "react-icons/ri";
import ReactPlayer from "react-player";
import { GetRootContext } from "../../../../../contexts/RootContext";
import moduleLessonApiSlice from "../../../../../redux/api/moduleLessonApiSlice";
import { Navigate, useLocation, useSearchParams } from "react-router-dom";
import { LoaderPage } from "../../../../../components/loader/Loader";
import toast from "react-hot-toast";

const ClassVideo = () => {
  const rootContext = useContext(GetRootContext);
  const location = useLocation();
  const [query] = useSearchParams();
  const [isFetching, setIsFetching] = useState(false); // Manual loading state
  const [getData, { data, isError, isSuccess, error }] =
    moduleLessonApiSlice.useLazyGetSingleModuleLessonQuery();

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
      <div className="video-player w-full h-[310px]  sm:h-[400px] md:h-[370px] lg:h-[550px] xl:h-[450px] 2xl:h-[650px]">
        {data?.lesson?.video ? (
          <ReactPlayer
            controls
            url={data?.lesson?.video}
            width={"100%"}
            height={"100%"}
          />
        ) : (
          <div className="w-full h-full bg-base-2 flex items-center justify-center">
            Video not published
          </div>
        )}
      </div>
      <div className=" bg-base-3 bg-opacity-15 py-4 px-4">
        <div className="classroom-tabs flex-wrap gap-y-4 border-b pb-4 border-b-base-3 flex items-center justify-between gap-x-4">
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
