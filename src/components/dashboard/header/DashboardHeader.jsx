import React, { useContext, useState } from "react";
import { GoSearch } from "react-icons/go";
import { IoChevronDownSharp } from "react-icons/io5";
import { LuBell } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { GetRootContext } from "../../../contexts/RootContext";
import { GetAuthContext } from "../../../contexts/AuthContext";
import { FaRegCircleUser } from "react-icons/fa6";
import { ButtonPrimary, ButtonSecondary } from "../../button/Button";
import { handleLogout } from "../../../utils/utils";

export const DashboardHeader = () => {
  const rootContext = useContext(GetRootContext);
  const authContext = useContext(GetAuthContext);
  const [isOpen, setISOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-base-2 h-[60px] flex items-center lg:h-[62px] 2xl:h-[65px] z-[200]">
      <div className="p-0 px-2 lg:pl-[280px] 2xl:pl-[310px] w-full">
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
            {authContext.user && (
              <div className="relative hidden md:block">
                <div
                  onClick={() => setISOpen(!isOpen)}
                  className="profile bg-base-3 bg-opacity-70 font-medium cursor-pointer active:scale-[0.98] duration-200 select-none text-gray-2 flex items-center gap-x-2 rounded-full px-1 lg:px-2 py-1"
                >
                  <div className="image shrink-0 py-1">
                    {authContext.user?.profilePicture ? (
                      <img
                        src={authContext.user?.profilePicture}
                        className="w-8 h-8 rounded-full border-2 border-base-2 border-opacity-40"
                        alt=""
                      />
                    ) : (
                      <FaRegCircleUser className="text-2xl" />
                    )}
                  </div>

                  <p className="hidden lg:block">
                    {authContext?.user?.fullName}
                  </p>
                  <button className="pr-2 hidden lg:block">
                    <IoChevronDownSharp />
                  </button>
                </div>
                <div
                  className={`absolute z-[300] grid  ${
                    isOpen ? "grid-rows-1" : "grid-rows-[0]"
                  } overflow-hidden duration-300 w-auto  mt-2 right-0 bg-indigo-500 rounded-md shadow-md`}
                >
                  <div className="w-[350px] p-2">
                    <div className="dropdown-header hover:bg-base-3 cursor-pointer duration-300 pb-2  p-4 rounded-lg bg-opacity-35 bg-base-3 flex items-center gap-x-3">
                      <div className="image shrink-0">
                        {authContext?.user?.profilePicture ? (
                          <img
                            src={authContext?.user?.profilePicture}
                            className="w-12 h-12 rounded-full border-2 border-base-2 border-opacity-40"
                            alt=""
                          />
                        ) : (
                          <FaRegCircleUser className="text-2xl" />
                        )}
                      </div>
                      <div className="info">
                        <h2>{authContext?.user?.fullName}</h2>
                        <p>{authContext?.user?.email}</p>
                      </div>
                    </div>
                    <div className="dropdown-content mt-4 grid grid-cols-2 gap-x-4">
                      <ButtonPrimary link={true} path="/">
                        Home
                      </ButtonPrimary>
                      <ButtonSecondary onClick={() => handleLogout()}>
                        Logout
                      </ButtonSecondary>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </menu>
        </nav>
      </div>
    </header>
  );
};
