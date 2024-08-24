import React from "react";
import DashboardSidebar from "../components/dashboard/sidebar/DashboardSidebar";
import { Outlet } from "react-router-dom";
import { DashboardHeader } from "../components/dashboard/header/DashboardHeader";

export const DashboardLayout = () => {
  return (
    <>
      <DashboardSidebar />
      <DashboardHeader />
      <div className="p-0 md:pl-[280px] 2xl:pl-[310px] pt-[60px] lg:pt-[62px] 2xl:pt-[65px]">
        <div className="db-container pt-4 lg:pt-5">
          <Outlet />
        </div>
      </div>
    </>
  );
};
