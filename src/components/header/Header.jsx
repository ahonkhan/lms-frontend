import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { BiBell, BiMenu, BiUser } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { menuData } from "../../data/menuData";

export const Header = () => {
  //   const menus = [
  //     { name: "হোম", path: "/" },
  //     { name: "কোর্স সমূহ", path: "/courses" },
  //     { name: "যোগাযোগ", path: "/contact" },
  //   ];

  return (
    <header
      className={`h-[65px] sticky top-0 flex items-center site-container w-full z-[100]  bg-base-3 bg-opacity-90`}
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
          <Link to={"/"} className="text-xl">
            <BiUser />
          </Link>
          <button className="text-xl lg:hidden">
            <BiMenu />
          </button>
        </ul>
      </nav>
    </header>
  );
};
