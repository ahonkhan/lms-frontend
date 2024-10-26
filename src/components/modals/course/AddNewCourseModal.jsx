import React, { useContext, useEffect, useRef, useState } from "react";
import ModalCenter from "../ModalCenter";
import { GetModalContext } from "../../../contexts/ModalContext";

import {
  InputFieldWithLabel,
  SelectFieldWithLabel,
  TextAreaFieldWithLabel,
} from "../../input-field/InputField";
import { ButtonPrimary } from "../../button/Button";
import { useDispatch, useSelector } from "react-redux";
import categoryApiSlice from "../../../redux/api/categoryApiSlice";
import courseApiSlice from "../../../redux/api/courseApiSlice";
import toast from "react-hot-toast";
import { addCourse } from "../../../redux/slice/courseSlice";
import { ButtonLoader } from "../../loader/Loader";
const AddNewCourseModal = () => {
  const {} = categoryApiSlice.useFetchAllCategoryQuery();
  const modalContext = useContext(GetModalContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [batch, setBatch] = useState("");
  const [category, setCategory] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [startDate, setStartDate] = useState("");
  const categoryState = useSelector((state) => state.category);
  const categories = categoryState.categories;
  const [createCourse, { data, isLoading, isError, isSuccess, error }] =
    courseApiSlice.useCreateCourseMutation();
  const dispatch = useDispatch();
  const handleCreateCourse = () => {
    const newText = description.replace(/\n/g, "<br>");
    const formData = new FormData();
    if (name) {
      formData.append("name", name);
    }
    if (description) {
      formData.append("description", newText);
    }
    if (price) {
      formData.append("price", price);
    }
    if (batch) {
      formData.append("batch", batch);
    }
    if (category?._id) {
      formData.append("category", category?._id);
    }
    if (startDate) {
      formData.append("startDate", startDate);
    }
    if (previewImage) {
      formData.append("previewImage", previewImage);
    }

    createCourse(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(addCourse(data.course));
      toast("Course added successfully");
      setName("");
      setDescription("");
      setCategory("");
      setBatch("");
      setPrice("");
      setPreviewImage("");
      setStartDate("");
      modalContext.setCreateCourseModal(false);
    }

    if (isError) {
      if (error?.data?.errors) {
        toast.error(error?.data?.errors[0].msg);
      } else {
        if (error.data?.message) {
          toast.error(error.data?.message);
        }
      }
    }
  }, [isSuccess, isError]);
  return (
    <ModalCenter
      modalStatus={modalContext.courseCreateModal}
      setModalStatus={modalContext.setCreateCourseModal}
      title={"Create new course"}
      fullWidth={true}
    >
      <div className="flex flex-col gap-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <InputFieldWithLabel
            label={"Course name"}
            placeholder="Course name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputFieldWithLabel
            label={"Course fee"}
            placeholder="Course fee"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <InputFieldWithLabel
            type="text"
            label={"Batch"}
            placeholder="Batch"
            value={batch}
            onChange={(e) => setBatch(e.target.value)}
          />
          <InputFieldWithLabel
            type="date"
            label={"Start Date"}
            placeholder="Start Date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <InputFieldWithLabel
            type="file"
            label={"Preview Image"}
            placeholder="Preview Image"
            onChange={(e) => setPreviewImage(e.target.files[0])}
          />
          <SelectFieldWithLabel
            label={"Select category"}
            placeholder="Select category"
            data={categories}
            selectedData={category}
            setSelectedData={setCategory}
          />
        </div>

        <div className="">
          <TextAreaFieldWithLabel
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            label={"Description"}
            placeholder="Start here..."
          />
        </div>

        <div className="relative">
          <ButtonPrimary onClick={handleCreateCourse}>
            Create course
          </ButtonPrimary>
          {isLoading && <ButtonLoader />}
        </div>
      </div>
    </ModalCenter>
  );
};

export default AddNewCourseModal;
