// переменные
const popup = document.querySelector('.popup_type_profile');
const popupForm = popup.querySelector('.popup__container');
const nameInput = popup.querySelector('#name');
const aboutInput = popup.querySelector('#about-self');

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

const closePopup = evt => evt.currentTarget.closest('.popup')
  .classList.remove('popup_opened');

function showPopup(popupElem) {
  popupElem.classList.add('popup_opened');

  const closeButton = popupElem.querySelector('.popup__close');
  closeButton.addEventListener('click', closePopup);
}

const handleLikeButton = evt => evt.target.classList.toggle('element__button_active');

const handleDeleteButton = evt => evt.currentTarget.closest('.element').remove();

function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();
  title.textContent = nameInput.value;
  subtitle.textContent = aboutInput.value;
  closePopup(evt);
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
  closePopup(evt);
  addPopupForm.reset();
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

editButton.addEventListener('click', () => {
  nameInput.value = title.textContent;
  aboutInput.value = subtitle.textContent;
  showPopup(popup);
});

const observer = new MutationObserver(switchNoCards);

observer.observe(cardsList, { childList: true });

addButton.addEventListener('click', () => showPopup(addPopup));

popupForm.addEventListener('submit', handleEditProfileFormSubmit);

addPopupForm.addEventListener('submit', handleAddFormSubmit);

renderCards(initialCards);