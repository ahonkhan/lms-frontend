import React, { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { ButtonPrimary, ButtonSecondary } from "../button/Button";
import { menuData } from "../../data/menuData";
import { NavLink } from "react-router-dom";
import { GetRootContext } from "../../contexts/RootContext";
import { GetAuthContext } from "../../contexts/AuthContext";
import { BiUser } from "react-icons/bi";
import { handleLogout } from "../../utils/utils";
import { FaRegCircleUser } from "react-icons/fa6";

const GlobalSidebar = () => {
  const rootContext = useContext(GetRootContext);
  const authContext = useContext(GetAuthContext);
  const handleLinkClick = () => {
    rootContext.setSidebarOpen(false);
  };
  return (
    <div className="lg:hidden">
      <div
        className={`fixed ${
          rootContext.sidebarOpen
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        } top-0 duration-100 z-[1500] left-0 h-screen w-screen bg-base-1 bg-opacity-80`}
      ></div>
      <aside
        className={`sidebar ${
          rootContext.sidebarOpen ? "translate-x-0" : "translate-x-full"
        } duration-300 flex flex-col p-5 h-screen fixed top-0 right-0 w-full sm:w-[400px] z-[2000] bg-base-3 sm:rounded-l-3xl`}
      >
        <div className="sidebar-head shrink-0 border-b border-base-2 border-opacity-40 pb-2 flex justify-between items-center">
          <div className="logo">
            <h1 className="text-xl font-bold">Skillup</h1>
          </div>
          <div className="">
            <button
              onClick={() => rootContext.setSidebarOpen(false)}
              className="text-2xl "
            >
              <IoMdClose />
            </button>
          </div>
        </div>
        <div className="">
          {authContext.user && (
            <div className="w-full p-2">
              <div className="dropdown-header pb-2 flex-col sm:flex-row sm:text-start text-center  p-4 rounded-lg bg-opacity-35 bg-base-3 flex items-center gap-3">
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
        <menu className="sidebar-menu h-full flex flex-col py-4">
          <ul className="flex flex-col h-full gap-4 uppercase font-medium">
            {menuData.map((item) => (
              <li key={item?.id}>
                <NavLink
                  onClick={handleLinkClick}
                  to={item?.path}
                  className="rounded block global-sidebar-menu-item border-b-2 border-transparent sidebar cursor-pointer bg-base-2 px-2 py-2"
                >
                  {item?.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="end-buttons shrink-0">
            {authContext.user ? (
              <ButtonPrimary
                link={true}
                path="/dashboard/courses"
                onClick={handleLinkClick}
              >
                Dashboard
              </ButtonPrimary>
            ) : (
              <ButtonPrimary
                link={true}
                path="/login"
                onClick={handleLinkClick}
              >
                Login
              </ButtonPrimary>
            )}
          </div>
        </menu>
      </aside>
    </div>
  );
};

export default GlobalSidebar;
