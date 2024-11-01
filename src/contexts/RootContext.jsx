import { createContext, useState } from "react";

export const GetRootContext = createContext();

export const RootContext = ({ children }) => {
  const [moduleOpen, setModuleOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dashboardSidebarOpen, setDashboardSidebarOpen] = useState(false);

  return (
    <GetRootContext.Provider
      value={{
        setModuleOpen,
        moduleOpen,
        setSidebarOpen,
        sidebarOpen,
        setDashboardSidebarOpen,
        dashboardSidebarOpen,
      }}
    >
      {children}
    </GetRootContext.Provider>
  );
};
