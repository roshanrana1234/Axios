import React from "react";

const DeleteModal = ({ visible, closeModal, devID, deleteData }) => {
  const handleClose = (e) => {
    if (e.target.id === "container") {
      closeModal();
    }
  };

  if (!visible) {
    return null;
  }

  const handleYes = () => {
    deleteData(devID);
  };
  console.log(devID);
  return (
    <>
      <div
        id="container"
        onClick={handleClose}
        className="fixed bg-black/60  backdrop-blur-sm inset-0 flex justify-center items-center"
      >
        <div className="bg-white p-4 rounded flex flex-col gap-3 font-semibold ">
          Are You Sure You Want To Delete This Data?
          <div className="flex w-full gap-2 justify-between">
            <button onClick={handleYes} className="btn bg-red-500">
              Yes
            </button>
            <button onClick={closeModal} className="btn">
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
