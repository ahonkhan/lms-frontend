import React, { useContext, useEffect, useState } from "react";
import ModalCenter from "../ModalCenter";
import { GetModalContext } from "../../../contexts/ModalContext";
import {
  InputFieldWithLabel,
  TextAreaFieldWithLabel,
} from "../../input-field/InputField";
import { ButtonPrimary } from "../../button/Button";
import toast from "react-hot-toast";
import moduleLessonApiSlice from "../../../redux/api/moduleLessonApiSlice";
import { useDispatch } from "react-redux";
import { addCourseLessons } from "../../../redux/slice/courseSlice";
import { ButtonLoader } from "../../loader/Loader";

const ModuleLessonCreateModal = () => {
  const modalContext = useContext(GetModalContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState("");
  const dispatch = useDispatch();
  const { course, module } = modalContext.moduleLessonCreateHelperID;
  const [createModule, { data, error, isSuccess, isError, isLoading }] =
    moduleLessonApiSlice.useCreateCourseModuleLessonMutation();
  const handleCreateModule = () => {
    if (!(name && description && video && module && course)) {
      toast.error("All fields are required!");
    }

    createModule({
      name: name,
      description: description,
      video: video,
      module: module,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(addCourseLessons(data.lesson));
      toast.success("Lesson added successfully!");
      setDescription("");
      setVideo("");
      modalContext.setCreateModuleLessonModal(false);
    }
    if (isError) {
      if (error?.data?.errors) {
        toast.error(error.data.errors[0].msg);
      } else {
        if (error?.data?.message) {
          toast.error(error.data.message);
        }
      }
    }
  }, [isSuccess, isError]);
  return (
    <ModalCenter
      modalStatus={modalContext.modulelLessonCreateModal}
      setModalStatus={modalContext.setCreateModuleLessonModal}
      title={"Create module lessons"}
    >
      {/* create modal */}

      <div className="flex flex-col gap-y-5">
        <InputFieldWithLabel
          type="text"
          label={"Lesson name"}
          placeholder="Lesson name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextAreaFieldWithLabel
          label={"Lesson description"}
          placeholder="Lesson description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <InputFieldWithLabel
          label={"Lesson video"}
          placeholder="Lesson video"
          value={video}
          onChange={(e) => setVideo(e.target.value)}
        />

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

export default ModuleLessonCreateModal;
