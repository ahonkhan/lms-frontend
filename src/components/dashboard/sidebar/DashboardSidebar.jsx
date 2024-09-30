import React from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi";
import { IoArrowBack, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineCardGiftcard } from "react-icons/md";

import { PiGraduationCapDuotone } from "react-icons/pi";
import { RiHomeSmile2Line } from "react-icons/ri";
import { TiBookmark } from "react-icons/ti";
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
      id: 5,
      title: "Category",
      path: "/dashboard/category",
      icon: <BiCategoryAlt />,
    },
    {
      id: 2,
      title: "Courses",
      path: "/dashboard/courses",
      icon: <PiGraduationCapDuotone />,
    },
    {
      id: 3,
      title: "Transactions",
      path: "/dashboard/transactions",
      icon: <MdOutlineCardGiftcard />,
    },
    {
      id: 4,
      title: "Cv Builder",
      path: "/dashboard/cv-builder",
      icon: <TiBookmark />,
    },

    {
      id: 6,
      title: "Users",
      path: "/dashboard/users",
      icon: <HiOutlineUsers />,
    },
    {
      id: 7,
      title: "Settings",
      path: "/dashboard/settings",
      icon: <IoSettingsOutline />,
    },
  ];
  return (
    <aside className="bg-base-2 -translate-x-full md:translate-x-0 border-r border-base-3 border-opacity-30 w-full md:w-[280px] 2xl:w-[310px] fixed z-[250] top-0 left-0 ">
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
