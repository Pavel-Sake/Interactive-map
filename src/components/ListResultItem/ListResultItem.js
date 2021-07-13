import React, {useState} from "react";
import ModalWindow from "../ModalWindow/ModalWindow";

import './ListResultItem.css';


function ListResultItem({name, data, district, resultsForLevel}) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <li className="list-item">
      <button
        className="list-item__button"
        onClick={openModal}
      >
        {name}
        <i>{district}</i>
      </button>
      <ModalWindow
        name={name}
        isOpen={modalIsOpen}
        closeModal={closeModal}
        data={data}
        resultsForLevel={resultsForLevel}
      />
    </li>
  );
}

export default ListResultItem;