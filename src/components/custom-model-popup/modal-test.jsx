import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    // Hacemos la funcion Toggle para cambiar de true a false
    setShowModalPopup(!showModalPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {showModalPopup && (
        <Modal
          onClose={onClose}
          header={<div>Modal Customer Header</div>}
          body={<div>Modal Customer Body</div>}
          footer={<h3>Modal Customer Footer</h3>}
        />
      )}
    </div>
  );
}
