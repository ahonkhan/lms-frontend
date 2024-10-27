import React from "react";
import AddNewCategoryModal from "../components/modals/category/AddNewCategoryModal";
import AddNewCourseModal from "../components/modals/course/AddNewCourseModal";
import CourseModuleAddModal from "../components/modals/courseModule/CourseModuleAddModal";

const ModalWrapper = () => {
  return (
    <>
      <CourseModuleAddModal />
      <AddNewCategoryModal />
      <AddNewCourseModal />
    </>
  );
};

export default ModalWrapper;
