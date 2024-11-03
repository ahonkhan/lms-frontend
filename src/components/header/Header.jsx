import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { BiBell, BiMenu, BiUser } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { menuData } from "../../data/menuData";
import { GrFormNextLink } from "react-icons/gr";
import { GetRootContext } from "../../contexts/RootContext";
import { GetAuthContext } from "../../contexts/AuthContext";
import { ButtonPrimary, ButtonSecondary } from "../button/Button";
import { handleLogout } from "../../utils/utils";
import { FaRegCircleUser } from "react-icons/fa6";

export const Header = () => {
  const authContext = useContext(GetAuthContext);
  const setCurrentRoute = () => {
    localStorage.setItem("currentRoute", location.href);
  };
  const rootContext = useContext(GetRootContext);
  const [isOpen, setISOpen] = useState(false);
  return (
    <header
      className={`h-[65px] sticky top-0 flex items-center site-container w-full z-[300]  bg-base-3 bg-opacity-90`}
    >
      <nav className="h-full justify-between flex items-center w-full">
        <div className="logo">
          {/* <img className="w-[150px] " src={logo} alt="" /> */}
          <p className="text-white font-bold text-2xl">SkillUp</p>
        </div>
        <menu className="hidden lg:block">
          <ul className="flex items-center gap-x-3">
            {menuData.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  className={`font-normal nav-link  text-gray-2 hover:text-primary duration-300 px-2 rounded-md`}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </menu>
        <ul className="flex items-center gap-x-4 text-gray-2">
          <Link to={"/"} className="text-xl ">
            <BiBell />
          </Link>

          {authContext.user ? (
            <Link
              onClick={setCurrentRoute}
              to={"/dashboard"}
              className="bg-primary active:scale-[0.98] duration-150 group gap-x-2 px-4 rounded-lg font-medium text-white text-center flex items-center justify-center py-2"
            >
              Dashboard
              <span className="text-xl group-hover:translate-x-1 duration-300">
                <GrFormNextLink />
              </span>
            </Link>
          ) : (
            <Link
              onClick={setCurrentRoute}
              to={"/login"}
              className="bg-primary active:scale-[0.98] duration-150 group gap-x-2 px-4 rounded-lg font-medium text-white text-center flex items-center justify-center py-2"
            >
              Login
              <span className="text-xl group-hover:translate-x-1 duration-300">
                <GrFormNextLink />
              </span>
            </Link>
          )}
          {authContext.user && (
            <div className="hidden md:block relative">
              {authContext.user?.profilePicture ? (
                <img
                  onClick={() => setISOpen(!isOpen)}
                  src={authContext.user?.profilePicture}
                  className="w-10 h-10 rounded-full cursor-pointer border-2 border-base-2 border-opacity-40"
                  alt=""
                />
              ) : (
                <button onClick={() => setISOpen(!isOpen)} className="flex items-center justify-center">
                  <FaRegCircleUser className="text-2xl cursor-pointer" />
                </button>
              )}
              <div
                className={`absolute grid  ${
                  isOpen ? "grid-rows-1" : "grid-rows-[0]"
                } overflow-hidden duration-300 w-auto  mt-2 right-0 bg-indigo-500 rounded-md shadow-md`}
              >
                <div className="w-[350px] p-2">
                  <div className="dropdown-header hover:bg-base-3 cursor-pointer duration-300 pb-2  p-4 rounded-lg bg-opacity-35 bg-base-3 flex items-center gap-x-3">
                    <div className="image shrink-0">
                      {authContext.user?.profilePicture ? (
                        <img
                          src={authContext.user?.profilePicture}
                          className="w-12 h-12 rounded-full border-2 border-base-2 border-opacity-40"
                          alt=""
                        />
                      ) : (
                        <FaRegCircleUser className="text-2xl" />
                      )}
                    </div>
                    <div className="info">
                      <h2>{authContext.user.fullName}</h2>
                      <p>{authContext.user.email}</p>
                    </div>
                  </div>
                  <div className="dropdown-content mt-4 grid grid-cols-2 gap-x-4">
                    <ButtonPrimary link={true} path="/dashboard/settings">
                      Profile
                    </ButtonPrimary>
                    <ButtonSecondary onClick={() => handleLogout()}>
                      Logout
                    </ButtonSecondary>
                  </div>
                </div>
              </div>
            </div>
          )}
          <button
            onClick={() => {
              rootContext.setSidebarOpen(true);
            }}
            className="text-xl lg:hidden"
          >
            <BiMenu />
          </button>
        </ul>
      </nav>
    </header>
  );
};
