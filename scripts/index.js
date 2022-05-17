const popup = document.querySelector('.popup');
const profileElement = document.querySelector('.profile');

const title = profileElement.querySelector('.profile__title');
const subtitle = profileElement.querySelector('.profile__subtitle');
const editButton = profileElement.querySelector('.profile__edit-button');

const popupForm = popup.querySelector('.popup__conteiner');
const nameInput = popup.querySelector('#name');
const aboutInput = popup.querySelector('#about-self');
const closeButton = popup.querySelector('.popup__close');

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

