export const showPopup = (popupElem) => {
  addPopupEventsListeners(popupElem);
  popupElem.classList.add('popup_opened');
};

export const closePopupByButton = evt => {
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