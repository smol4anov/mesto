let popup = document.querySelector('.popup');
let profileElement = document.querySelector('.profile');

let title = profileElement.querySelector('.profile__title');
let subtitle = profileElement.querySelector('.profile__subtitle');
let editButton = profileElement.querySelector('.profile__edit-button');

let popupForm = popup.querySelector('.popup__conteiner');
let nameInput = popup.querySelector('#name');
let aboutInput = popup.querySelector('#about-self');
let closeButton = popup.querySelector('.popup__close');

function showPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = title.textContent;
  aboutInput.value = subtitle.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (event) {
  event.preventDefault();
  title.textContent = nameInput.value;
  subtitle.textContent = aboutInput.value;
  closePopup();
}

editButton.addEventListener('click', showPopup);
closeButton.addEventListener('click', closePopup);
popupForm.addEventListener('submit', formSubmitHandler);

