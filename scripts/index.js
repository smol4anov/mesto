const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// переменные
const popup = document.querySelector('.popup');
const popupForm = popup.querySelector('.popup__conteiner');
const nameInput = popup.querySelector('#name');
const aboutInput = popup.querySelector('#about-self');

const profileElement = document.querySelector('.profile');
const title = profileElement.querySelector('.profile__title');
const subtitle = profileElement.querySelector('.profile__subtitle');
const editButton = profileElement.querySelector('.profile__edit-button');
const addButton = profileElement.querySelector('.profile__add-button');

const addPopup = document.querySelector('.popup_new-place');
const addPopupForm = addPopup.querySelector('.popup__conteiner');
const placeInput = addPopup.querySelector('#place');
const imageInput = addPopup.querySelector('#image');

const cardsList = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#element-template').content;
const cardTemplateNode = cardTemplate.querySelector('.element');

const imagePopup = document.querySelector('.popup_open-image');
const imagePopupTitle = imagePopup.querySelector('.popup__subtitle');
const imagePopupLink = imagePopup.querySelector('.popup__image');

const noPlaces = document.querySelector('.elements__no-places');

// общие функции
const closePopup = evt => evt.currentTarget.closest('.popup')
  .classList.remove('popup_opened');

function showPopup(popupElem) {
  popupElem.classList.add('popup_opened');

  const closeButton = popupElem.querySelector('.popup__close');
  closeButton.addEventListener('click', closePopup);
}

const likeButtonClick = evt => evt.target.classList.toggle('element__button_active');

const deleteButtonClick = evt => {
  evt.currentTarget.closest('.element').remove();
  switchNoCards();
};

// редактирование профиля
function formSubmitHandler(evt) {
  evt.preventDefault();
  title.textContent = nameInput.value;
  subtitle.textContent = aboutInput.value;
  closePopup(evt);
}

editButton.addEventListener('click', () => {
  showPopup(popup);
  nameInput.value = title.textContent;
  aboutInput.value = subtitle.textContent;
});

popupForm.addEventListener('submit', formSubmitHandler);

//добавление карточки
addButton.addEventListener('click', () => showPopup(addPopup));

const openImage = evt => {
  const imageElement = evt.currentTarget;

  const cardTitle = imageElement.closest('.element')
    .querySelector('.element__title');
  imagePopupTitle.textContent = cardTitle.textContent;
  imagePopupLink.src = imageElement.src;
  imagePopupLink.alt = cardTitle.textContent;

  showPopup(imagePopup);
};

const renderCard = (place, imageLink) => {

  const newCard = cardTemplateNode.cloneNode(true);

  newCard.querySelector('.element__title').textContent = place;

  const image = newCard.querySelector('.element__image');

  image.src = imageLink;
  image.alt = place;

  image.addEventListener('click', openImage);

  const likeButton = newCard.querySelector('.element__button');

  likeButton.addEventListener('click', likeButtonClick);

  const deleteButton = newCard.querySelector('.element__delete');

  deleteButton.addEventListener('click', deleteButtonClick);

  return newCard;

};

const addFormSubmitHandler = evt => {
  evt.preventDefault();
  const newCard = renderCard(placeInput.value, imageInput.value);
  cardsList.prepend(newCard);
  closePopup(evt);
  addPopupForm.reset();
  switchNoCards();
};

const switchNoCards = () => {
  const cards = cardsList.querySelectorAll('.element');
  (cards.length) ? 
    noPlaces.classList.add('elements__no-places_hidden') :
    noPlaces.classList.remove('elements__no-places_hidden');
};

function cardsRender(cardsArray) {

  const cards = cardsList.querySelectorAll('.element');

  for (let i = 0; i < cards.length; i++) {
    cards[i].remove();
  }

  cardsArray.forEach((item) => {
    const newCard = renderCard(item.name, item.link);
    cardsList.append(newCard);
  });

  switchNoCards();
}

addPopupForm.addEventListener('submit', addFormSubmitHandler);

cardsRender(initialCards);