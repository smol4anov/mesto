import { initialCards } from './cards.js';

import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

const validationSettings = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

const formValidators = {};

const profilePopup = document.querySelector('.popup_type_profile');
const popupForm = profilePopup.querySelector('.popup__container');
const nameInput = profilePopup.querySelector('#name');
const aboutInput = profilePopup.querySelector('#about-self');

const profileElement = document.querySelector('.profile');
const title = profileElement.querySelector('.profile__title');
const subtitle = profileElement.querySelector('.profile__subtitle');
const editButton = profileElement.querySelector('.profile__edit-button');

const addButton = profileElement.querySelector('.profile__add-button');

const addPopup = document.querySelector('.popup_type_new-place');
const addPopupForm = addPopup.querySelector('.popup__container');
const placeInput = addPopup.querySelector('#place');
const imageInput = addPopup.querySelector('#image');

const cardsList = document.querySelector('.elements__list');

const imagePopup = document.querySelector('.popup_type_open-image');
const imagePopupTitle = imagePopup.querySelector('.popup__subtitle');
const imagePopupLink = imagePopup.querySelector('.popup__image');

const noPlaces = document.querySelector('.elements__no-places');

const showPopup = (popupElem) => {
  addPopupEventsListeners(popupElem);
  popupElem.classList.add('popup_opened');
};

const closePopupByButton = evt => {
  const currentPopup = evt.currentTarget.closest('.popup');
  closePopup(currentPopup);
};

const addPopupEventsListeners = (popupElem) => {
  popupElem.addEventListener('click', closePopupByCloseButton);
  popupElem.addEventListener('mousedown', closePopupByOverlayClick);
  document.addEventListener('keydown', closePopupByEscKey);
};

const closePopup = popupElem => {
  popupElem.classList.remove('popup_opened');
  removePopupEventsListeners(popupElem);
};

const closePopupByCloseButton = evt => {
  if (evt.target.classList.contains('popup__close')) {
    closePopupByButton(evt);
  }
};

const closePopupByEscKey = (evt) => {
  if (evt.key !== 'Escape') {
    return;
  }
  const openedPopup = document.querySelector('.popup_opened');
  if (openedPopup) {
    closePopup(openedPopup);
  }
};

const closePopupByOverlayClick = (evt) => {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
};

const removePopupEventsListeners = (popupElem) => {
  popupElem.removeEventListener('click', closePopupByCloseButton);
  popupElem.removeEventListener('mousedown', closePopupByOverlayClick);
  document.removeEventListener('keydown', closePopupByEscKey);
};

const handleCardClick = (name, link) => {
  imagePopupTitle.textContent = name;
  imagePopupLink.src = link;
  imagePopupLink.alt = name;

  showPopup(imagePopup);
}


function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();
  title.textContent = nameInput.value;
  subtitle.textContent = aboutInput.value;
  closePopupByButton(evt);
}

function createCard(item) {
  const card = new Card(item, '#element-template', handleCardClick);
  return card.generateCard();
}

const handleAddFormSubmit = evt => {
  evt.preventDefault();
  const cardElement = createCard({ name: placeInput.value, link: imageInput.value });
  cardsList.prepend(cardElement);
  closePopupByButton(evt);
};

const switchNoCards = () => {
  const cards = cardsList.querySelectorAll('.element');
  (cards.length) ?
    noPlaces.classList.add('elements__no-places_hidden') :
    noPlaces.classList.remove('elements__no-places_hidden');
};

const observer = new MutationObserver(switchNoCards);

observer.observe(cardsList, { childList: true });

editButton.addEventListener('click', () => {
  nameInput.value = title.textContent;
  aboutInput.value = subtitle.textContent;
  formValidators['profile-form'].resetValidation();
  showPopup(profilePopup);
});

addButton.addEventListener('click', () => {
  addPopupForm.reset();
  formValidators['new-card-form'].resetValidation();
  showPopup(addPopup);
});

function renderCards(cardsArray) {
  cardsArray.forEach((item) => {
    const cardElement = createCard(item);
    cardsList.append(cardElement);
  });
}

const enableValidation = (config) => {
  Array.from(document.querySelectorAll(config.formSelector))
    .forEach((formElement) => {
      const validator = new FormValidator(config, formElement);
      const formName = formElement.getAttribute('name');
      formValidators[formName] = validator;
      validator.enableValidation();
    });
};

popupForm.addEventListener('submit', handleEditProfileFormSubmit);

addPopupForm.addEventListener('submit', handleAddFormSubmit);

renderCards(initialCards);

enableValidation(validationSettings);