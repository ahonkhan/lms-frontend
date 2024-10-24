import { createContext, useState } from "react";

export const GetModalContext = createContext();

export const ModalContext = ({ children }) => {
  const [categoryCreateModal, setCreateCategoryModal] = useState(false);
  const [categoryUpdateModal, setUpdateCategoryModal] = useState(false);
  const [courseCreateModal, setCreateCourseModal] = useState(false);
  const [courseUpdateModal, setUpdateCourseModal] = useState(false);

  return (
    <GetModalContext.Provider
      value={{
        categoryCreateModal,
        setCreateCategoryModal,
        categoryUpdateModal,
        setUpdateCategoryModal,
        courseCreateModal,
        setCreateCourseModal,
      }}
    >
      {children}
    </GetModalContext.Provider>
  );
};
