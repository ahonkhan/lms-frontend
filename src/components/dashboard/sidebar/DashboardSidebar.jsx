import React, { useContext } from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { HiOutlineUsers } from "react-icons/hi";
import { IoArrowBack, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineCardGiftcard } from "react-icons/md";

import { PiGraduationCapDuotone } from "react-icons/pi";
import { RiHomeSmile2Line } from "react-icons/ri";
import { TiBookmark } from "react-icons/ti";
import { Link, NavLink } from "react-router-dom";
import { GetAuthContext } from "../../../contexts/AuthContext";
import { GetRootContext } from "../../../contexts/RootContext";
import { IoMdClose } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { ButtonPrimary, ButtonSecondary } from "../../button/Button";

const DashboardSidebar = () => {
  const dashboardMenu = [
    {
      id: 1,
      title: "Dashboard",
      path: "/dashboard",
      icon: <RiHomeSmile2Line />,
      role: "all",
    },
    {
      id: 5,
      title: "Category",
      path: "/dashboard/category",
      icon: <BiCategoryAlt />,
      role: "admin",
    },
    {
      id: 2,
      title: "Courses",
      path: "/dashboard/courses",
      icon: <PiGraduationCapDuotone />,
      role: "all",
    },
    {
      id: 3,
      title: "Transactions",
      path: "/dashboard/transactions",
      icon: <MdOutlineCardGiftcard />,
      role: "all",
    },
    {
      id: 4,
      title: "Cv Builder",
      path: "/dashboard/cv-builder",
      icon: <TiBookmark />,
      role: "all",
    },

    {
      id: 7,
      title: "Settings",
      path: "/dashboard/settings",
      icon: <IoSettingsOutline />,
      role: "all",
    },
  ];

  const authContext = useContext(GetAuthContext);
  const rootContext = useContext(GetRootContext);
  return (
    <aside
      className={`bg-base-2 ${
        rootContext.dashboardSidebarOpen ? "" : "-translate-x-full"
      }  lg:translate-x-0 border-r border-base-3 duration-300 border-opacity-30 w-full sm:w-[350px] lg:w-[280px] 2xl:w-[310px] fixed z-[250] top-0 left-0 `}
    >
      <div className="h-screen flex flex-col justify-between px-8">
        <div className="dashboard-header gap-x-6 shrink-0 flex items-center justify-between py-8">
          <div className="flex items-center gap-x-4">
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

          <button
            onClick={() => rootContext.setDashboardSidebarOpen(false)}
            className="text-2xl lg:hidden "
          >
            <IoMdClose />
          </button>
        </div>
        <div className="md:hidden">
          {authContext.user && (
            <div className="w-full p-2">
              <div className="dropdown-header pb-2 flex-col sm:flex-row sm:text-start text-center  p-4 rounded-lg bg-opacity-35  flex items-center gap-3">
                <div className="image shrink-0">
                  {authContext.user?.profilePicture ? (
                    <img
                      src={authContext.user?.profilePicture}
                      className="w-12 h-12 rounded-full border-2 border-base-2 border-opacity-40"
                      alt=""
                    />
                  ) : (
                    <FaRegCircleUser className="text-3xl" />
                  )}
                </div>
                <div className="info">
                  <h2>{authContext.user.fullName}</h2>
                  <p>{authContext.user.email}</p>
                </div>
              </div>
              <div className="dropdown-content mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ButtonPrimary link={true} path="/dashboard/settings">
                  Profile
                </ButtonPrimary>
                <ButtonSecondary onClick={() => handleLogout()}>
                  Logout
                </ButtonSecondary>
              </div>
            </div>
          )}
        </div>
        <div className="sidebar-menu mt-4 h-full">
          <ul className="grid gap-y-2">
            {dashboardMenu.map((item) => {
              if (item.role === "admin") {
                if (authContext?.user?.role === "admin") {
                  return (
                    <li key={item?.id}>
                      <NavLink
                        onClick={() =>
                          rootContext.setDashboardSidebarOpen(false)
                        }
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
                  );
                }
              } else {
                return (
                  <li key={item?.id}>
                    <NavLink
                      onClick={() => rootContext.setDashboardSidebarOpen(false)}
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
                );
              }
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
