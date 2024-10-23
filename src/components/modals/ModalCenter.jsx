import React from "react";
import { SectionTitleDashboard } from "../typography/Typography";
import { RxCross2 } from "react-icons/rx";

const ModalCenter = ({ children, title, modalStatus, setModalStatus }) => {
  return (
    <div
      className={`fixed ${
        modalStatus ? "visible" : "invisible"
      } duration-300  top-0 left-0 w-full h-full bg-base-1 z-[400] bg-opacity-70 flex items-center justify-center`}
    >
      <div
        className={`modal-container ${
          modalStatus ? "opacity-100 scale-100" : "opacity-0 scale-50 "
        } duration-100 flex flex-col w-full h-full md:w-[500px] md:h-auto md:max-h-[90vh] lg:w-[600px] xl:w-[650px] 2xl:w-[700px] rounded-lg p-4 sm:p-5 bg-base-2`}
      >
        <div className="modal-header border-b border-base-2 border-opacity-35 pb-2 shrink-0 flex justify-between items-center">
          <SectionTitleDashboard>{title}</SectionTitleDashboard>
          <button
            onClick={() => setModalStatus(false)}
            className="text-xl active:scale-[0.95] duration-200 h-8 w-8 bg-base-2 bg-opacity-30 text-white flex items-center justify-center rounded-full"
          >
            <RxCross2 />
          </button>
        </div>
        <div className="modal-body pt-2 h-full">{children}</div>
      </div>
    </div>
  );
};

export default ModalCenter;
