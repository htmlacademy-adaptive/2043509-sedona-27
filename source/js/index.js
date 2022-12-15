const mainNavToggle = document.querySelector('.main-nav__toggle');
const popUpMenu = document.querySelector('.pop-up-menu');
const popUpCloseButton = document.querySelector('.pop-up-menu__button-close');

if (popUpMenu.classList.contains('pop-up-menu--no-js')) {
  popUpMenu.classList.remove('pop-up-menu--no-js')
}

if (mainNavToggle.classList.contains('main-nav__toggle--no-js')) {
  mainNavToggle.classList.remove('main-nav__toggle--no-js')
}

const openPopUp = function() {
  mainNavToggle.addEventListener('click', (evt) => {
  evt.preventDefault();
  popUpMenu.classList.toggle('pop-up-menu--is-open');
  mainNavToggle.classList.toggle('visually-hidden');
  popUpCloseButton.classList.toggle('visually-hidden');
  });
}

const closePopUp = function () {
  popUpCloseButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    popUpMenu.classList.toggle('pop-up-menu--is-open');
    mainNavToggle.classList.toggle('visually-hidden');
    popUpCloseButton.classList.toggle('visually-hidden');
    });
}

openPopUp();
closePopUp();
