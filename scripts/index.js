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

const popup = document.querySelector('.popup');
const profileElement = document.querySelector('.profile');

const title = profileElement.querySelector('.profile__title');
const subtitle = profileElement.querySelector('.profile__subtitle');
const editButton = profileElement.querySelector('.profile__edit-button');

const popupForm = popup.querySelector('.popup__conteiner');
const nameInput = popup.querySelector('#name');
const aboutInput = popup.querySelector('#about-self');


const cardsList = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#element-template').content;

const noPlaces = document.querySelector('.elements__no-places');

const addPopup = document.querySelector('.popup_new-place');
const addButton = profileElement.querySelector('.profile__add-button');

function closePopup(popupElem) {
  popupElem.classList.remove('popup_opened');
}

function showPopup(popupElem) {
  popupElem.classList.add('popup_opened');

  const closeButton = popupElem.querySelector('.popup__close');
  closeButton.addEventListener('click', () => { closePopup(popupElem) });

}

function formSubmitHandler(event) {
  event.preventDefault();
  title.textContent = nameInput.value;
  subtitle.textContent = aboutInput.value;
  closePopup(popup);
}

function renderNoCards() {
  noPlaces.classList.remove('elements__no-places_hidden');
};

function renderHasCards() {
  noPlaces.classList.add('elements__no-places_hidden');
};

function cardsRender(cardsArray) {

  const cards = cardsList.querySelectorAll('.element');

  for (let i = 0; i < cards.length; i++) {
    cards[i].remove();
  }

  if (cardsArray.length === 0) {
    renderNoCards();
    return;
  }

  cardsArray.forEach((item) => {

    const newCard = cardTemplate.querySelector('.element').cloneNode(true);

    newCard.querySelector('.element__title').textContent = item.name;

    const image = newCard.querySelector('.element__image');

    image.src = item.link;
    image.alt = item.name;

    const likeButton = newCard.querySelector('.element__button');

    likeButton.addEventListener('click', (event) => {
      event.target.classList.toggle('element__button_active');
    });

    const deleteButton = newCard.querySelector('.element__delete');

    deleteButton.addEventListener('click', (event) => {
      event.target.parentElement.remove();
    });

    cardsList.append(newCard);

  });

  renderHasCards();
}



editButton.addEventListener('click', () => {
  showPopup(popup);
  nameInput.value = title.textContent;
  aboutInput.value = subtitle.textContent;
});

popupForm.addEventListener('submit', formSubmitHandler);

cardsRender(initialCards);

addButton.addEventListener('click', () => {
  showPopup(addPopup);
});
