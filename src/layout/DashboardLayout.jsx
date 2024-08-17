import React from "react";
import DashboardSidebar from "../components/dashboard/sidebar/DashboardSidebar";
import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
  return (
    <>
      <DashboardSidebar />
      <div className="">
        <Outlet />
      </div>
    </>
  );
};
