import React from "react";

export const TimelineItemDefault = ({ start, count, title, body }) => {
  return (
    <div
      className={`timeline-item flex ${
        start ? "justify-start" : "justify-end"
      }`}
    >
      <div className="box relative  rounded-l-lg  sm:w-[50%] ">
        <div
          className={`absolute  ${
            start
              ? " -translate-x-[50%] sm:right-0 sm:translate-x-[50%] "
              : "left-0 -translate-x-[50%] "
          } z-[10]   top-[50%] -translate-y-[50%]`}
        >
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary">
            <div className="h-7 w-7 flex items-center justify-center rounded-full bg-base-1">
              <span className="text-lg ">{count}</span>
            </div>
          </div>
        </div>
        <div className={`${start ? "pl-8 sm:pr-8 " : "pl-8 "}`}>
          <div className="p-6 border rounded-lg border-dashed relative">
            <span className="absolute top-0 left-6 opacity-10 text-[100px]">
              {count}
            </span>
            <h2 className="text-lg md:text-xl text-primary">{title}</h2>
            <div className="mt-2">
              <p className="text-sm md:text-base">{body}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
