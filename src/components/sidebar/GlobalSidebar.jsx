import React, { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { ButtonPrimary } from "../button/Button";
import { menuData } from "../../data/menuData";
import { NavLink } from "react-router-dom";
import { GetRootContext } from "../../contexts/RootContext";
import { GetAuthContext } from "../../contexts/AuthContext";

const GlobalSidebar = () => {
  const rootContext = useContext(GetRootContext);
  const authContext = useContext(GetAuthContext);
  const handleLinkClick = () => {
    rootContext.setSidebarOpen(false);
  };
  return (
    <div>
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
