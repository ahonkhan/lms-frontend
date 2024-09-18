import React from "react";
import ReactPlayer from "react-player";

const ClassVideo = () => {
  return (
    <div className="course-play w-full h-fit ">
      <div className="video-player w-full h-[310px]  sm:h-[400px] md:h-[370px] lg:h-[550px] xl:h-[450px] 2xl:h-[650px]">
        <ReactPlayer
          controls
          url={"https://www.youtube.com/watch?v=FoS8r_zv-VE"}
          width={"100%"}
          height={"100%"}
        />
      </div>
      <div className=" bg-base-3 bg-opacity-15 py-4 px-4">
        <div className="classroom-tabs border-b pb-4 border-b-base-3 flex items-center gap-x-4">
          <button className="bg-primary px-6 py-2 rounded text-white">
            Description
          </button>
          <button>Assignment</button>
        </div>
        <div className="tab-details mt-content">
          <h1 className="text-2xl font-medium text-white">
            Frontend Web Development with TailwindCss, JavaScript & React
          </h1>
          <p className="mt-4">
            Frontend Web Development with TailwindCSS, JavaScript & React
            কোর্সটি আপনাকে আধুনিক ওয়েব ডেভেলপমেন্টের মৌলিক ও উন্নত কৌশলগুলো
            শেখাবে। <br /> TailwindCSS দিয়ে কাস্টম ডিজাইন তৈরি, JavaScript দিয়ে
            ডায়নামিক ওয়েবসাইট ডেভেলপ এবং React দিয়ে ইন্টারঅ্যাকটিভ ইউজার
            ইন্টারফেস তৈরি শিখবেন।
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClassVideo;
