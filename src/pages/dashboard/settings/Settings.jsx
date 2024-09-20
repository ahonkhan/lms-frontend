import React from "react";
import { MdOutlineCameraAlt } from "react-icons/md";

const Settings = () => {
  return (
    <div className="sub-container xl:mt-4">
      <div className="profile-info-edit">
        <div className="flex items-center justify-center">
          <div className="profile-pic relative flex border-4 border-base-3  border-opacity-45 items-center overflow-hidden justify-center w-[110px] h-[110px] rounded-full">
            <img
              src="https://static.vecteezy.com/system/resources/previews/024/354/241/non_2x/happy-girl-standing-in-creative-office-illustration-ai-generative-free-photo.jpg"
              alt=""
              className="h-full w-full object-cover rounded-full"
            />
            <div className="absolute bg-black bg-opacity-60 h-[35%] top-[50%] translate-y-[50%] flex justify-center items-center left-0 w-full z-[100]">
              <button className="text-xl">
                <MdOutlineCameraAlt />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
