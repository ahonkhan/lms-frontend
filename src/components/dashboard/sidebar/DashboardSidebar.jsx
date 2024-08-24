import React from "react";
import { IoArrowBack, IoSettingsOutline } from "react-icons/io5";
import { LuFolderOpenDot } from "react-icons/lu";
import { MdStackedLineChart } from "react-icons/md";
import {
  PiCertificate,
  PiGraduationCapDuotone,
  PiNotepad,
} from "react-icons/pi";
import { RiHomeSmile2Line } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

const DashboardSidebar = () => {
  const dashboardMenu = [
    {
      id: 1,
      title: "Dashboard",
      path: "/dashboard",
      icon: <RiHomeSmile2Line />,
    },
    {
      id: 2,
      title: "Courses",
      path: "/dashboard/courses",
      icon: <PiGraduationCapDuotone />,
    },
    {
      id: 3,
      title: "Lessons",
      path: "/dashboard/lessons",
      icon: <PiNotepad />,
    },
    {
      id: 3,
      title: "Assessments",
      path: "/dashboard/lessons",
      icon: <MdStackedLineChart />,
    },
    {
      id: 4,
      title: "Certification",
      path: "/dashboard/certification",
      icon: <PiCertificate />,
    },
    {
      id: 5,
      title: "Resources",
      path: "/dashboard/resources",
      icon: <LuFolderOpenDot />,
    },
    {
      id: 5,
      title: "Settings",
      path: "/dashboard/settings",
      icon: <IoSettingsOutline />,
    },
  ];
  return (
    <aside className="bg-base-2 border-r border-base-3 border-opacity-30 w-full md:w-[280px] 2xl:w-[310px] fixed z-[250] top-0 left-0 ">
      <div className="h-screen flex flex-col justify-between px-8">
        <div className="dashboard-header gap-x-6 shrink-0 flex items-center justify-center py-8">
          <Link
            to={localStorage.getItem("currentRoute") ?? "/"}
            className="h-8 w-10 bg-primary text-white flex items-center justify-center rounded-sm"
          >
            <IoArrowBack className="text-xl" />
          </Link>
          <p className="text-2xl font-bold text-white text-center tracking-widest">
            Skillup
          </p>
        </div>
        <div className="sidebar-menu h-full">
          <ul className="grid gap-y-2">
            {dashboardMenu.map((item) => (
              <li key={item?.id}>
                <NavLink
                  to={item?.path}
                  className={({ isActive }) =>
                    isActive && item.path === "/dashboard"
                      ? "hover:bg-base-3  active dashboard-navlink px-4 block py-2 text-white cursor-pointer rounded-md"
                      : !isActive && item.path !== "/dashboard"
                      ? "hover:bg-base-3   px-4 block py-2 text-white cursor-pointer rounded-md"
                      : isActive && item.path !== "/dashboard"
                      ? "hover:bg-base-3 active dashboard-navlink px-4 block py-2 text-white cursor-pointer rounded-md"
                      : "hover:bg-base-3  px-4 block py-2 text-white cursor-pointer rounded-md"
                  }
                  end={item.path === "/dashboard"}
                >
                  <div className="menu-item flex items-center gap-x-3">
                    <span className="text-xl">{item?.icon}</span>
                    <p>{item?.title}</p>
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
