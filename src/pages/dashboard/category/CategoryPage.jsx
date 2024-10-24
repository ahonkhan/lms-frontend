import React, { useEffect } from "react";
import CategoryHeader from "./components/CategoryHeader";
import CategoryList from "./components/CategoryList";
import categoryApiSlice from "../../../redux/api/categoryApiSlice";

const CategoryPage = () => {
  const { data } = categoryApiSlice.useFetchAllCategoryQuery();

  return (
    <div>
      <CategoryHeader />
      <div className="mt-content"></div>
      <CategoryList />
    </div>
  );
};

export default CategoryPage;
