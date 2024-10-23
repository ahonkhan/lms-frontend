import React, { useContext } from "react";
import ModalCenter from "../ModalCenter";
import { GetModalContext } from "../../../contexts/ModalContext";
import { InputFieldWithLabel } from "../../input-field/InputField";
import { ButtonPrimary } from "../../button/Button";

const AddNewCategoryModal = () => {
  const modalContext = useContext(GetModalContext);
  return (
    <ModalCenter
      modalStatus={modalContext.categoryCreateModal}
      setModalStatus={modalContext.setCreateCategoryModal}
      title={"Create category"}
    >
      {/* create modal */}

      <div className="flex flex-col gap-y-5">
        <InputFieldWithLabel
          type="text"
          label={"Category name"}
          placeholder="Web & app development"
        />

        <ButtonPrimary>Create</ButtonPrimary>
      </div>
    </ModalCenter>
  );
};

export default AddNewCategoryModal;
