import { useState } from "react";
import Modal from "../Modal";
import ModalAddNewProduct from "../ModalAddNewProduct/ModalAddNewProduct";

const BtnAddNewProduct = () => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div>
      <input type="button" value="Add new product" onClick={() => setShowModal(true)}/>
      {showModal ? (
        <Modal>
          <ModalAddNewProduct close={closeModal}/>
        </Modal>
      ) : null}
    </div>
  );
};

export default BtnAddNewProduct;
