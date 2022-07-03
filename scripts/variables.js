export const validationSettings = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

export const profilePopup = document.querySelector('.popup_type_profile');
export const popupForm = profilePopup.querySelector('.popup__container');
export const nameInput = profilePopup.querySelector('#name');
export const aboutInput = profilePopup.querySelector('#about-self');

export const profileElement = document.querySelector('.profile');
export const title = profileElement.querySelector('.profile__title');
export const subtitle = profileElement.querySelector('.profile__subtitle');
export const editButton = profileElement.querySelector('.profile__edit-button');

export const addButton = profileElement.querySelector('.profile__add-button');

export const addPopup = document.querySelector('.popup_type_new-place');
export const addPopupForm = addPopup.querySelector('.popup__container');
export const placeInput = addPopup.querySelector('#place');
export const imageInput = addPopup.querySelector('#image');

export const cardsList = document.querySelector('.elements__list');

export const imagePopup = document.querySelector('.popup_type_open-image');
export const imagePopupTitle = imagePopup.querySelector('.popup__subtitle');
export const imagePopupLink = imagePopup.querySelector('.popup__image');

export const noPlaces = document.querySelector('.elements__no-places');