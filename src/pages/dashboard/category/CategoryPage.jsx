import React from "react";
import CategoryHeader from "./components/CategoryHeader";
import CategoryList from "./components/CategoryList";

const CategoryPage = () => {
  return (
    <div>
      <CategoryHeader />
      <div className="mt-content"></div>
      <CategoryList />
    </div>
  );
};

export default CategoryPage;
