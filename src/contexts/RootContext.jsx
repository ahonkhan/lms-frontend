import { createContext, useState } from "react";

export const GetRootContext = createContext();

export const RootContext = ({ children }) => {
  const [moduleOpen, setModuleOpen] = useState(false);

  return (
    <GetRootContext.Provider value={{ setModuleOpen, moduleOpen }}>
      {children}
    </GetRootContext.Provider>
  );
};
