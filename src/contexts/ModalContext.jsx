import { createContext, useState } from "react";

export const GetModalContext = createContext();

export const ModalContext = ({ children }) => {
  const [categoryCreateModal, setCreateCategoryModal] = useState(false);
  const [categoryUpdateModal, setUpdateCategoryModal] = useState(false);

  return (
    <GetModalContext.Provider
      value={{
        categoryCreateModal,
        setCreateCategoryModal,
        categoryUpdateModal,
        setUpdateCategoryModal,
      }}
    >
      {children}
    </GetModalContext.Provider>
  );
};
