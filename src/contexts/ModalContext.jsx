import { createContext, useState } from "react";

export const GetModalContext = createContext();

export const ModalContext = ({ children }) => {
  const [categoryCreateModal, setCreateCategoryModal] = useState(false);

  return (
    <GetModalContext.Provider
      value={{ categoryCreateModal, setCreateCategoryModal }}
    >
      {children}
    </GetModalContext.Provider>
  );
};
