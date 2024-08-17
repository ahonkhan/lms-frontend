import React, { useEffect } from "react";
import HeroArea from "./components/HeroArea";
import TeachingProcess from "./components/TeachingProcess";
import { CoursesList } from "./components/courselist/CoursesList";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroArea />
      <TeachingProcess />
      <CoursesList />
    </>
  );
};

export default HomePage;
