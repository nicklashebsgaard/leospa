// SCSS
import "./burgermenu.scss";

const BurgerModal = ({closeBurgerMenu}) => {

  const burgerikon = document.querySelector('#hamBurger');
  burgerikon.classList.add('showNone') // Tilføjer display none

  const handleClose = () => {
    burgerikon.classList.remove('showNone'); // fjener display none 
    closeBurgerMenu(false)
  }

  return (

    <div className="hamburgerMenuOpen">
        <span onClick={() => handleClose()} className="material-symbols-outlined modal">
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