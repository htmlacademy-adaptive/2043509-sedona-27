const mainNavToggle = document.querySelector('.main-nav__toggle');
const popUpMenu = document.querySelector('.pop-up-menu');
const popUpCloseButton = document.querySelector('.pop-up-menu__button-close');

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

