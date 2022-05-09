// SCSS
import "./modal.scss";

// REACT / useSTATE
import React, { useState } from "react";

// Site https://www.kindacode.com/article/how-to-make-a-modal-box-from-scratch-in-reactjs/

const Modal = () => {

  const [isOpen, setIsOpen] = useState(false);
  
  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (

    <div className="modalWrapper">

      {isOpen && (

        <>

          <div className="overlay"></div>

          <div className="modal">

            <header className="modal__header">
              <h2>Modal Title</h2>
              <button onClick={closeModal} className="close-button">&times;</button>
            </header>

            <main className="modal__main">
              <p>Some content here!</p>
            </main>

          </div>

        </>

      )}

      <button className="button" onClick={openModal}>Open Modal</button>
      
    </div>

  );

};

export default Modal;