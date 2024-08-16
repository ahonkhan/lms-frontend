import React from "react";
import { HiArrowSmallRight } from "react-icons/hi2";
import heroBG from "../../../assets/banner-bg.jpg";
import { TextPrimary } from "../../../components/typography/Typography";
const HeroArea = () => {
  return (
    <div className="">
      <main className=" bg-base-3 bg-opacity-20">
        <div className="relative  py-[45px] lg:py-[100px] xl:py-[110px] 2xl:py-[130px]">
          <img
            src={heroBG}
            className=" z-[-2] absolute top-0 left-0 w-full h-full object-cover"
            alt=""
          />
          <div className="bg-base-1 z-[-1] absolute top-0 left-0 w-full h-full opacity-85"></div>
          <div className="main-content relative site-container flex items-center justify-center h-full w-full">
            <div className="text-box text-center md:w-[80%] lg:w-[80%] xl:w-[65%]">
              <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold">
                শিখুন,নিজেকে গড়ে তুলুন,আপনার সাথে আছি আমরা,
                <span className="text-primary">
                  আপনিই হবেন সেরার সেরা!
                </span>{" "}
              </h1>
              <p className="mt-4 text-sm lg:text-base">
                একজন শিক্ষার্থীকে যত্ন সহাকারে আমরাই শিখীয়ে থাকি,যাতে সে নিজেকে
                এই আপডাটেড দুনিয়ার সাথে তাল মিলিয়ে চলতে পারে! আপনাকে দেওয়া হবে
                লাইভ সাপরট,পাচ্ছেন <TextPrimary>Assignment</TextPrimary> ,{" "}
                <TextPrimary>Job Preparation</TextPrimary> এবং থাকছে{" "}
                <TextPrimary>Interview questions</TextPrimary>.
              </p>
              <div className="mt-8 flex items-center justify-center">
                <button className="bg-base-3 flex active:translate-y-1 duration-150 items-center group gap-x-2 rounded-lg px-6 md:px-8 py-2 text-sm md:text-base lg:text-lg">
                  <span>ঘুরে দেখুন</span>
                  <HiArrowSmallRight className="group-hover:translate-x-2 duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroArea;
