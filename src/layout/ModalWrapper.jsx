import React from "react";
import AddNewCategoryModal from "../components/modals/category/AddNewCategoryModal";
import AddNewCourseModal from "../components/modals/course/AddNewCourseModal";
import CourseModuleAddModal from "../components/modals/courseModule/CourseModuleAddModal";
import ModuleLessonCreateModal from "../components/modals/module-lessons/ModuleLessonCreateModal";

const ModalWrapper = () => {
  return (
    <>
      <CourseModuleAddModal />
      <AddNewCategoryModal />
      <AddNewCourseModal />
      <ModuleLessonCreateModal />
    </>
  );
};

export default ModalWrapper;
