// SCSS
import "./burgermenu.scss";

const BurgerModal = ({closeBurgerMenu}) => {

  return (

    <div className="hamburgerMenuOpen">
        <span onClick={() => closeBurgerMenu(false)} className="material-symbols-outlined modal">
            close
        </span>
        <ul>
        <li><a class="list-item" href="#">HOME</a></li>
        <li><a class="list-item" href="#">ABOUT</a></li>
        <li><a class="list-item" href="#">FEATURE</a></li>
        <li><a class="list-item" href="#">SERVICE</a></li>
        <li><a class="list-item" href="#">CONTACT</a></li>
        </ul>
    </div>

  );

};

export default BurgerModal;