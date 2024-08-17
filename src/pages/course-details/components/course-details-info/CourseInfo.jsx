import React from "react";
import { GrFormNextLink } from "react-icons/gr";

export const CourseInfo = () => {
  return (
    <div className="bg-base-2">
      <div className="site-container py-section">
        <div className=" md:grid-cols-2 gap-y-8 flex md:grid flex-col-reverse gap-x-10 sub-container">
          <div className="left-details">
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
                Enroll
                <span className="text-xl group-hover:translate-x-1 duration-300">
                  <GrFormNextLink />
                </span>
              </button>
              <p className="text-lg">৳ ৫,৫০০</p>
            </div>
            <div className="more-info text-sm md:text-base mt-8 flex items-center gap-4">
              <p className="px-4 py-2 bg-base-3 rounded-sm text-white">
                152 modules
              </p>
              <p className="px-4 py-2 bg-base-3 rounded-sm text-white">
                650+ prerecorded videos
              </p>
              <p className="px-4 py-2 bg-base-3 rounded-sm text-white">
                152 modules
              </p>
            </div>
          </div>
          <div className="right-image">
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
