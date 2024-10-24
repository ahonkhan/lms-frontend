import React, { useContext } from "react";
import {
  BackButton,
  ButtonPrimary,
} from "../../../../components/button/Button";
import { SectionTitleDashboard } from "../../../../components/typography/Typography";
import { GetModalContext } from "../../../../contexts/ModalContext";

const CategoryHeader = () => {
  const modalContext = useContext(GetModalContext);
  return (
    <div className="flex items-center justify-between">
      <SectionTitleDashboard>All categories</SectionTitleDashboard>
      <div className="">
        <ButtonPrimary
          onClick={() => modalContext.setCreateCategoryModal(true)}
          width={"auto"}
        >
          Add new category
        </ButtonPrimary>
      </div>
    </div>
  );
};

export default CategoryHeader;
