import { useState } from "react";
import Modal from "./modal";

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    // Hacemos la funcion Toggle para cambiar de true a false
    setShowModalPopup(!showModalPopup);
  }

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {showModalPopup && <Modal
      header={<div>Modal Customer Header</div>}
      body={<div>Modal Customer Body</div>}
      footer={<h3>Modal Customer Footer</h3>}/>}
    </div>
  );
}
