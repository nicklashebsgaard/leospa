// SCSS
import "./sometest.scss";

// COMPONENT
import Modal from "../modal/Modal";

const SomeTest = () => {

    const handleToggleModal = () => {
        let target = document.querySelector("#modal");
        target.classList.toggle("active");
      }

  return (

    <div className="someTest"> 

    <button onClick={ handleToggleModal }>
        <span className="material-symbols-outlined">
            menu
        </span> 
    </button>

        <Modal>
            
        </Modal>
    </div>

  );

};

export default SomeTest;
