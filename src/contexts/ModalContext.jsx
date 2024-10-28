import { createContext, useState } from "react";

export const GetModalContext = createContext();

export const ModalContext = ({ children }) => {
  const [categoryCreateModal, setCreateCategoryModal] = useState(false);
  const [categoryUpdateModal, setUpdateCategoryModal] = useState(false);
  const [courseCreateModal, setCreateCourseModal] = useState(false);
  const [moduleCreateModal, setCreateModuleModal] = useState(false);
  const [modulelLessonCreateModal, setCreateModuleLessonModal] =
    useState(false);
  const [moduleCreateHelperID, setModuleCreateHelperID] = useState("");
  const [moduleLessonCreateHelperID, setModuleLessonCreateHelperID] =
    useState("");
  return (
    <GetModalContext.Provider
      value={{
        categoryCreateModal,
        setCreateCategoryModal,
        categoryUpdateModal,
        setUpdateCategoryModal,
        courseCreateModal,
        setCreateCourseModal,
        moduleCreateModal,
        setCreateModuleModal,
        moduleCreateHelperID,
        setModuleCreateHelperID,
        modulelLessonCreateModal,
        setCreateModuleLessonModal,
        setModuleLessonCreateHelperID,
        moduleLessonCreateHelperID,
      }}
    >
      {children}
    </GetModalContext.Provider>
  );
};
