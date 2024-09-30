import React from "react";
import { GrLinkNext } from "react-icons/gr";
import { IoCreateOutline } from "react-icons/io5";

const CategoryList = () => {
  return (
    <div className="md:pr-2">
      <div className="bg-base-3 p-4 rounded-md overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-base-2 text-start">
              <th className="px-4 py-2 text-light text-start">Name</th>
              <th className="px-4 py-2 text-light text-start">Courses</th>
              <th className="px-4 py-2 text-light text-start">Added by</th>
              <th className="px-4 py-2 text-light text-start">Action</th>
          
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-1 hover:bg-base-2 hover:bg-opacity-25 cursor-default duration-300">
              <td className="px-4 py-2">Web & apps development</td>
              <td className="px-4 py-2">05 courses</td>
              <td className="px-4 py-2">Ahon khan</td>

              <td className="px-4 py-2 ">
                <div className="flex w-fit flex-wrap items-center gap-x-4">
                  <button className="hover:underline">Edit</button>
                  <button className="bg-red-600 px-2 py-1 text-white rounded cursor-pointer hover:opacity-80 duration-200 active:scale-[0.98]">
                    Delete
                  </button>
                </div>
              </td>
            
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryList;
