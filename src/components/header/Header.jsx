import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { BiBell, BiMenu, BiUser } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { menuData } from "../../data/menuData";
import { GrFormNextLink } from "react-icons/gr";
import { GetRootContext } from "../../contexts/RootContext";
import { GetAuthContext } from "../../contexts/AuthContext";

export const Header = () => {
  const authContext = useContext(GetAuthContext);
  const setCurrentRoute = () => {
    localStorage.setItem("currentRoute", location.href);
  };
  const rootContext = useContext(GetRootContext);

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
            <Link to={"/dashboard/settings"} className="text-xl">
              <BiUser />
            </Link>
          ) : (
            <Link to={"/login"} className="text-xl">
              <BiUser />
            </Link>
          )}

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
