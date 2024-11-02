import React, { useContext, useEffect, useState } from "react";
import ModalCenter from "../ModalCenter";
import { GetModalContext } from "../../../contexts/ModalContext";
import {
  InputFieldWithLabel,
  TextAreaFieldWithLabel,
} from "../../input-field/InputField";
import { ButtonPrimary } from "../../button/Button";
import courseModuleApiSlice from "../../../redux/api/courseModuleApiSlice";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { ButtonLoader } from "../../loader/Loader";
import { useDispatch } from "react-redux";
import { addCourseModule } from "../../../redux/slice/courseModuleSlice";
import courseApiSlice from "../../../redux/api/courseApiSlice";

const CourseModuleAddModal = () => {
  const modalContext = useContext(GetModalContext);
  const [createModule, { data, isSuccess, isError, error, isLoading }] =
    courseModuleApiSlice.useCreateCourseModuleMutation();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const dispatch = useDispatch();
  const handleCreateModule = () => {
    if (
      !(
        name &&
        description &&
        startDate &&
        endDate &&
        modalContext?.moduleCreateHelperID
      )
    ) {
      return toast.error("All fields are required!");
    }
    createModule({
      name: name,
      description: description,
      course: modalContext?.moduleCreateHelperID,
      startDate: startDate,
      endDate: endDate,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(addCourseModule(data?.module));
      dispatch(courseApiSlice.util.invalidateTags(["Course"]));
      toast.success("Module created successfully.");
      modalContext.setCreateModuleModal(false);
      setName("");
      setDescription("");
      setStartDate("");
      setEndDate("");
    }
    if (isError) {
      if (error.data.errors[0]) {
        toast.error(error.data.errors[0].msg);
      } else {
        toast.error(error?.data?.message);
      }
    }
  }, [isSuccess, isError]);
  return (
    <ModalCenter
      modalStatus={modalContext.moduleCreateModal}
      setModalStatus={modalContext.setCreateModuleModal}
      title={"Create module"}
    >
      {/* create modal */}

      <div className="flex flex-col gap-y-5">
        <InputFieldWithLabel
          type="text"
          label={"Module name"}
          placeholder="Module name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextAreaFieldWithLabel
          label={"Module description"}
          placeholder="Module description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <InputFieldWithLabel
            type="date"
            label={"Start date"}
            placeholder="Start date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <InputFieldWithLabel
            type="date"
            label={"End date"}
            placeholder="End date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <div className="relative">
          <ButtonPrimary onClick={() => handleCreateModule()}>
            Create
          </ButtonPrimary>
          {isLoading && <ButtonLoader />}
        </div>
      </div>
    </ModalCenter>
  );
};

export default CourseModuleAddModal;
