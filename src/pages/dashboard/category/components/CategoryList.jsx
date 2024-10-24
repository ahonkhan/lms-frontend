import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import categoryApiSlice from "../../../../redux/api/categoryApiSlice";
import toast from "react-hot-toast";
import { deleteCategory } from "../../../../redux/slice/categorySlice";
import { ButtonLoader } from "../../../../components/loader/Loader";
import CategoryListItem from "./CategoryListItem";

const CategoryList = () => {
  const category = useSelector((state) => state.category);

  return (
    <div className="md:pr-2">
      <div className="bg-base-3 p-4 rounded-md overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-base-2 text-start">
              <th className="px-4 py-2 text-light text-start">Name</th>
              {/* <th className="px-4 py-2 text-light text-start">Courses</th> */}
              <th className="px-4 py-2 text-light text-start">Added by</th>
              <th className="px-4 py-2 text-light text-start">Action</th>
            </tr>
          </thead>
          <tbody>
            {category.categories.map((item) => (
              <CategoryListItem item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryList;
