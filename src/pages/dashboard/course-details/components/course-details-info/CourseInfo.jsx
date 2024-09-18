import React from "react";
import { GrFormNextLink } from "react-icons/gr";

export const CourseInfo = () => {
  return (
    <div className="bg-base-3 bg-opacity-40 rounded-lg">
      <div className="sub-container py-section">
        <div className="flex flex-col-reverse lg:flex-row px-5 gap-y-5 lg:items-center lg:justify-between">
          <div className="left-details flex flex-col justify-center lg:w-[50%]">
            <h1 className="text-2xl font-medium text-white">
              Frontend Web Development with TailwindCss, JavaScript & React
            </h1>
            <p className="mt-4">
              Frontend Web Development with TailwindCSS, JavaScript & React
              কোর্সটি আপনাকে আধুনিক ওয়েব ডেভেলপমেন্টের মৌলিক ও উন্নত কৌশলগুলো
              শেখাবে। <br /> TailwindCSS দিয়ে কাস্টম ডিজাইন তৈরি, JavaScript
              দিয়ে ডায়নামিক ওয়েবসাইট ডেভেলপ এবং React দিয়ে ইন্টারঅ্যাকটিভ ইউজার
              ইন্টারফেস তৈরি শিখবেন।
            </p>

            <div className="purchase mt-8 flex items-center gap-x-4">
              <button className="bg-primary active:scale-[0.98] duration-150 group gap-x-2 px-16 rounded-lg font-medium text-white text-center flex items-center justify-center py-2">
                Ongoing
                <span className="text-xl group-hover:translate-x-1 duration-300">
                  <GrFormNextLink />
                </span>
              </button>
            </div>
          </div>
          <div className="right-image lg:w-[40%]">
            <img
              src="https://dream-software.vercel.app/_next/static/media/frontend-hero.af921956.png"
              alt=""
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
