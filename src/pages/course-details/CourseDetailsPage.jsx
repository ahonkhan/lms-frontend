import React, { useEffect } from "react";
import { CourseInfo } from "./components/course-details-info/CourseInfo";
import { CourseModules } from "./components/course-moules/CourseModules";
import { Helmet } from "react-helmet";

export const CourseDetailsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>
          Frontend Web Development with TailwindCss, JavaScript & React
        </title>
        <meta
          name="description"
          content="Frontend Web Development with TailwindCSS, JavaScript & React কোর্সটি আপনাকে আধুনিক ওয়েব ডেভেলপমেন্টের মৌলিক ও উন্নত কৌশলগুলো শেখাবে।
TailwindCSS দিয়ে কাস্টম ডিজাইন তৈরি, JavaScript দিয়ে ডায়নামিক ওয়েবসাইট ডেভেলপ এবং React দিয়ে ইন্টারঅ্যাকটিভ ইউজার ইন্টারফেস তৈরি শিখবেন।"
        />

        <meta
          property="og:image"
          content="https://dream-software.vercel.app/_next/static/media/frontend-hero.af921956.png"
        />
      </Helmet>
      <CourseInfo />
      <CourseModules />
    </>
  );
};
