import React from "react";
import AddNewCategoryModal from "../components/modals/category/AddNewCategoryModal";
import AddNewCourseModal from "../components/modals/course/AddNewCourseModal";

const ModalWrapper = () => {
  return (
    <>
      <AddNewCategoryModal />
      <AddNewCourseModal />
    </>
  );
};

export default ModalWrapper;
