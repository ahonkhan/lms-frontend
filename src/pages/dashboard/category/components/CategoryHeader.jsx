import React from "react";
import {
  BackButton,
  ButtonPrimary,
} from "../../../../components/button/Button";
import { SectionTitleDashboard } from "../../../../components/typography/Typography";

const CategoryHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <SectionTitleDashboard>All categories</SectionTitleDashboard>
      <ButtonPrimary>Add new category</ButtonPrimary>
    </div>
  );
};

export default CategoryHeader;
