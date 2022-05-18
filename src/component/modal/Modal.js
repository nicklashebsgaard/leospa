// SCSS
import "./modal.scss";

const Modal = ({ children }) => {

  const toggleModal = () => {
    let target = document.querySelector("#modal");
    target.classList.toggle("active");
  };

  

  return (

    <div id="modal">

      <div className="togglemodal">

        <button onClick={toggleModal}>
          <span className="material-symbols-outlined">close</span>
        </button>
        {children}
        
      </div>

    </div>

  );

};

export default Modal;
