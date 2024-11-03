import React, { useContext, useEffect, useState } from "react";
import { MdOutlineCameraAlt } from "react-icons/md";
import {
  InputFieldWithLabel,
  SelectFieldWithLabel,
} from "../../../../components/input-field/InputField";
import { GetAuthContext } from "../../../../contexts/AuthContext";
import userApiSlice from "../../../../redux/api/userApiSlice";
import { ButtonLoader } from "../../../../components/loader/Loader";
import toast from "react-hot-toast";
import { FaRegCircleUser } from "react-icons/fa6";

const BasicInfo = () => {
  const authContext = useContext(GetAuthContext);
  const [updateUser, { data, isSuccess, isLoading, isError, error }] =
    userApiSlice.useEditUserMutation();
  const [fullName, setFullName] = useState(authContext?.user?.fullName);
  const [profilePicture, setProfilePicture] = useState(
    authContext?.user?.profilePicture
  );
  const [email, setEmail] = useState(authContext?.user?.email);
  const [gender, setGender] = useState({
    name: authContext?.user?.gender,
    _id: 14,
  });
  const [currentAddress, setCurrentAddress] = useState(
    authContext?.user?.currentAddress
  );
  const [secondaryEmail, setsSecondaryEmail] = useState(
    authContext?.user?.secondaryEmail
  );
  const [phoneNumber, setPhoneNumber] = useState(
    authContext?.user?.phoneNumber
  );
  const genderList = [
    { name: "male", _id: 1 },
    { name: "female", _id: 2 },
    { name: "others", _id: 3 },
  ];

  const handleUpdate = () => {
    const formData = new FormData();
    if (fullName) formData.append("fullName", fullName);
    if (
      profilePicture &&
      profilePicture !== authContext?.user?.profilePicture
    ) {
      formData.append("profilePicture", profilePicture);
    }
    if (gender) formData.append("gender", gender?.name);
    if (currentAddress) formData.append("currentAddress", currentAddress);
    if (secondaryEmail) formData.append("secondaryEmail", secondaryEmail);
    if (phoneNumber) formData.append("phoneNumber", phoneNumber);
    updateUser(formData);
  };

  useEffect(() => {
    if (isError) {
      toast.error("Failed to update.");
    }
    if (isSuccess) {
      authContext.setUser(data.updatedUser);
      toast.success("Updated successfully.");
    }
  }, [isSuccess, isError]);
  return (
    <div
      onSubmit={(e) => e.preventDefault()}
      className="bg-base-3 bg-opacity-30 rounded-md"
    >
      <div className="profile-info-edit sub-container bg-base-2 bg-opacity-50 py-section rounded-md">
        <div className="flex items-center justify-center">
          <label htmlFor="profilePicture">
            <input
              hidden
              type="file"
              name="profilePicture"
              id="profilePicture"
              onChange={(e) => setProfilePicture(e.target.files[0])}
            />
            <div className="profile-pic cursor-pointer relative flex border-4 border-base-3 overflow-hidden  border-opacity-45 items-center  justify-center w-[100px] h-[100px] rounded-full">
              <div className="image shrink-0 py-1">
                {profilePicture ? (
                  <img
                    src={
                      profilePicture === authContext?.user?.profilePicture
                        ? profilePicture
                        : URL.createObjectURL(profilePicture)
                    }
                    className="w-[100px] h-[100px] object-cover rounded-full"
                    alt=""
                  />
                ) : (
                  <FaRegCircleUser className="text-2xl" />
                )}
              </div>
              <div className="absolute pointer-events-none bg-black bg-opacity-60 h-[35%] top-[50%] translate-y-[50%] flex justify-center items-center left-0 w-full z-[100]">
                <button className="text-xl">
                  <MdOutlineCameraAlt />
                </button>
              </div>
            </div>
          </label>
        </div>

        {/* user info */}

        <div className="user-info px-4 mt-content">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="grid grid-cols-1 gap-y-4"
          >
            <div className="input-group grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-4">
              <InputFieldWithLabel
                value={fullName}
                type={"text"}
                placeholder={"Full name"}
                label={"Full Name"}
                onChange={(e) => setFullName(e.target.value)}
              />
              <InputFieldWithLabel
                value={phoneNumber}
                type={"text"}
                placeholder={"Phone number"}
                label={"Phone number"}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="input-group grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-4">
              <InputFieldWithLabel
                value={email}
                type={"email"}
                placeholder={"Primary email"}
                label={"Primary email"}
                disabled
              />
              <InputFieldWithLabel
                value={secondaryEmail}
                type={"text"}
                placeholder={"Secondary email"}
                label={"Secondary email"}
                onChange={(e) => setsSecondaryEmail(e.target.value)}
              />
            </div>
            <div className="input-group grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-4">
              <SelectFieldWithLabel
                type={"text"}
                placeholder={"Gender"}
                label={"Gender"}
                selectedData={gender}
                setSelectedData={setGender}
                data={genderList}
              />
              <InputFieldWithLabel
                type={"text"}
                value={currentAddress}
                placeholder={"Current address"}
                label={"Current address"}
                onChange={(e) => setCurrentAddress(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <div className="relative">
                <button
                  onClick={() => handleUpdate()}
                  className="bg-primary px-6 py-2 rounded-md text-white duration-300 active:scale-[0.98]"
                >
                  Update
                </button>

                {isLoading && <ButtonLoader />}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
