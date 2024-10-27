import React, { useContext, useEffect, useState } from "react";
import ModalCenter from "../ModalCenter";
import { GetModalContext } from "../../../contexts/ModalContext";
import { InputFieldWithLabel } from "../../input-field/InputField";
import { ButtonPrimary } from "../../button/Button";
import toast from "react-hot-toast";
import categoryApiSlice from "../../../redux/api/categoryApiSlice";
import { useDispatch } from "react-redux";
import { addCategory } from "../../../redux/slice/categorySlice";
import { ButtonLoader } from "../../loader/Loader";

const AddNewCategoryModal = () => {
  const modalContext = useContext(GetModalContext);
  const [name, setName] = useState("");
  const [createCategory, { data, isLoading, isSuccess, isError, error }] =
    categoryApiSlice.useCreateCategoryMutation();
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (!name) {
      return toast.error("Category name required!");
    }
    createCategory(name);
  };

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(addCategory(data.category));
      toast.success("Category added successfully.");
      modalContext.setCreateCategoryModal(false);
      setName("");
    }

    if (isError) {
      if (error?.data?.message) {
        toast.error(error?.data?.message);
      }
    }
  }, [isSuccess, isError]);
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
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <div className="relative">
          <ButtonPrimary onClick={handleSubmit}>Create</ButtonPrimary>
          {isLoading && <ButtonLoader />}
        </div>
      </div>
    </ModalCenter>
  );
};

export default AddNewCategoryModal;
