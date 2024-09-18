import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { BackButton } from "../../../../../components/button/Button";
import ReactPlayer from "react-player";
import { HiOutlineDotsVertical } from "react-icons/hi";

const ClassRoom = () => {
  return (
    <div>
      <div className="heading flex items-center gap-x-4">
        <BackButton />
        <div className="course-details">
          <h1 className="text-base font-medium text-gray-2">
            Frontend Web Development with TailwindCss batch 2
          </h1>
        </div>
      </div>

      <div className="course-play-area gap-y-4 mt-content flex-col xl:flex-row flex gap-x-10 justify-between">
        <div className="course-play w-full ">
          <div className="video-player w-full h-[310px]  sm:h-[400px] md:h-[370px] lg:h-[550px] xl:h-[450px] 2xl:h-[650px]">
            <ReactPlayer
              controls
              url={"/videos/song1.mp4"}
              width={"100%"}
              height={"100%"}
            />
          </div>
        </div>
        <div className="course-modules shrink-0 hidden xl:block bg-opacity-50 rounded-lg bg-base-3 ">
          <div className=" bg-base-2 bg-opacity-50 w-full xl:w-[360px] 2xl:w-[400px] h-[600px]">
            <div className="header px-4 flex items-center justify-between rounded-t-lg py-4 bg-base-3 bg-opacity-20">
              <h2 className="text-xl font-medium">Playlist</h2>
              <div className="controls">
                <button className="text-xl w-10 h-10 rounded-full bg-transparent flex items-center justify-center duration-300 active:scale-[0.98] hover:bg-base-3 bg-opacity-50 ">
                  <HiOutlineDotsVertical />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassRoom;
