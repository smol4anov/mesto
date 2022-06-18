// переменные
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
const cardTemplate = document.querySelector('#element-template').content;
const cardTemplateNode = cardTemplate.querySelector('.element');

const imagePopup = document.querySelector('.popup_type_open-image');
const imagePopupTitle = imagePopup.querySelector('.popup__subtitle');
const imagePopupLink = imagePopup.querySelector('.popup__image');

const noPlaces = document.querySelector('.elements__no-places');


const closePopup = popupElem => {
  popupElem.classList.remove('popup_opened');  
  removePopupEventsListeners(popupElem);
};

const closePopupByButton = evt => {
  if (evt.target.classList.contains('popup__close')) {
    const currentPopup = evt.currentTarget.closest('.popup');
    closePopup(currentPopup);
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

const addPopupEventsListeners = (popupElem) => {
  popupElem.addEventListener('click', closePopupByButton);
  popupElem.addEventListener('mousedown', closePopupByOverlayClick);
  document.addEventListener('keydown', closePopupByEscKey);
};

const removePopupEventsListeners = (popupElem) => {
  popupElem.removeEventListener('click', closePopupByButton);
  popupElem.removeEventListener('mousedown', closePopupByOverlayClick);
  document.removeEventListener('keydown', closePopupByEscKey);
};

function showPopup(popupElem) {
  addPopupEventsListeners(popupElem);
  popupElem.classList.add('popup_opened');
}

const handleLikeButton = evt => evt.target.classList.toggle('element__button_active');

const handleDeleteButton = evt => evt.currentTarget.closest('.element').remove();

function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();
  title.textContent = nameInput.value;
  subtitle.textContent = aboutInput.value;
  closePopupByButton(evt);
}

const openImage = evt => {
  const imageElement = evt.currentTarget;

  const cardTitle = imageElement.closest('.element')
    .querySelector('.element__title');
  imagePopupTitle.textContent = cardTitle.textContent;
  imagePopupLink.src = imageElement.src;
  imagePopupLink.alt = cardTitle.textContent;

  showPopup(imagePopup);
};

const createCard = (place, imageLink) => {

  const newCard = cardTemplateNode.cloneNode(true);

  newCard.querySelector('.element__title').textContent = place;

  const image = newCard.querySelector('.element__image');

  image.src = imageLink;
  image.alt = place;

  image.addEventListener('click', openImage);

  const likeButton = newCard.querySelector('.element__button');

  likeButton.addEventListener('click', handleLikeButton);

  const deleteButton = newCard.querySelector('.element__delete');

  deleteButton.addEventListener('click', handleDeleteButton);

  return newCard;
};

const handleAddFormSubmit = evt => {
  evt.preventDefault();
  const newCard = createCard(placeInput.value, imageInput.value);
  cardsList.prepend(newCard);
  closePopupByButton(evt);
};

const switchNoCards = () => {
  const cards = cardsList.querySelectorAll('.element');
  (cards.length) ?
    noPlaces.classList.add('elements__no-places_hidden') :
    noPlaces.classList.remove('elements__no-places_hidden');
};

function renderCards(cardsArray) {

  cardsArray.forEach((item) => {
    const newCard = createCard(item.name, item.link);
    cardsList.append(newCard);
  });
}

const observer = new MutationObserver(switchNoCards);

observer.observe(cardsList, { childList: true });

editButton.addEventListener('click', () => {
  nameInput.value = title.textContent;
  aboutInput.value = subtitle.textContent;
  resetInputError(popupForm, validationSettings);
  showPopup(profilePopup);
});

addButton.addEventListener('click', () => {
  addPopupForm.reset();
  resetInputError(addPopupForm, validationSettings);
  showPopup(addPopup);
});

popupForm.addEventListener('submit', handleEditProfileFormSubmit);

addPopupForm.addEventListener('submit', handleAddFormSubmit);

renderCards(initialCards);