import React, { useContext } from "react";
import { GoSearch } from "react-icons/go";
import { IoChevronDownSharp } from "react-icons/io5";
import { LuBell } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { GetRootContext } from "../../../contexts/RootContext";

export const DashboardHeader = () => {
  const rootContext = useContext(GetRootContext);
  return (
    <header className="fixed top-0 left-0 w-full bg-base-2 h-[60px] flex items-center lg:h-[62px] 2xl:h-[65px] z-[200]">
      <div className="p-0 md:pl-[280px] 2xl:pl-[310px] w-full">
        <nav className="flex justify-between w-full gap-x-6 items-center db-container">
          <div className="nav-button shrink-0">
            <button
              onClick={() => rootContext.setDashboardSidebarOpen(true)}
              className="text-xl text-white"
            >
              <RxHamburgerMenu />
            </button>
          </div>

          <div className="search relative w-[800px] bg-base-3 bg-opacity-25 rounded-lg ">
            <input
              type="text"
              placeholder="Find your best course..."
              className="w-full outline-none  px-4 pr-12 focus:outline-base-3 rounded-lg border-transparent py-2 h-10 bg-transparent"
            />
            <button className="absolute flex items-center -translate-y-[50%] -translate-x-[50%] justify-center text-white text-xl top-[50%] right-0 w-8">
              <GoSearch />
            </button>
          </div>

          <menu className="nav-menu flex shrink-0 items-center justify-end gap-x-5">
            <div className="notification flex items-center">
              <button className="text-xl text-white">
                <LuBell />
              </button>
            </div>
            <div className="profile  bg-base-3 bg-opacity-70 font-medium cursor-pointer active:scale-[0.98] duration-200 select-none text-gray-2 flex items-center gap-x-2 rounded-full px-1 lg:px-2 py-1">
              <img
                src="https://static.vecteezy.com/system/resources/previews/024/354/241/non_2x/happy-girl-standing-in-creative-office-illustration-ai-generative-free-photo.jpg"
                alt=""
                className="w-8 h-8 rounded-full object-cover border border-base-3"
              />

              <p className="hidden lg:block">Tamanna akhter</p>
              <button className="pr-2 hidden lg:block">
                <IoChevronDownSharp />
              </button>
            </div>
          </menu>
        </nav>
      </div>
    </header>
  );
};
