// SCSS
import "./burgermenu.scss";

const BurgerModal = ({closeBurgerMenu}) => {

  return (

    <div className="hamburgerMenuOpen">
        <span onClick={() => closeBurgerMenu(false)} className="material-symbols-outlined modal">
            close
        </span>
    </div>

  );

};

export default BurgerModal;