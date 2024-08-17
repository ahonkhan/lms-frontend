import React from "react";
import HeroArea from "./components/HeroArea";
import TeachingProcess from "./components/TeachingProcess";
import { CoursesList } from "./components/CoursesList";

const HomePage = () => {
  return (
    <>
      <HeroArea />
      <TeachingProcess />
      <CoursesList />
    </>
  );
};

export default HomePage;
