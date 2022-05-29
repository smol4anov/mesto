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
const closeButton = popup.querySelector('.popup__close');

const cardsList = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#element-template').content;


function showPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = title.textContent;
  aboutInput.value = subtitle.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(event) {
  event.preventDefault();
  title.textContent = nameInput.value;
  subtitle.textContent = aboutInput.value;
  closePopup();
}

function switchNoCards() { };

function cardsRender(cardsArray) {

  const cards = cardsList.querySelectorAll('.element');

  for (let i = 0; i < cards.length; i++) {
    cards[i].remove();
  }

  cardsArray.forEach((item) => {

    const newCard = cardTemplate.querySelector('.element').cloneNode(true);

    newCard.querySelector('.element__title').textContent = item.name;
    let image = newCard.querySelector('.element__image');

    image.src = item.link;

    console.log(image.src);

    cardsList.append(newCard);

  });

  switchNoCards();
}



editButton.addEventListener('click', showPopup);
closeButton.addEventListener('click', closePopup);
popupForm.addEventListener('submit', formSubmitHandler);

/*cardsRender(initialCards);*/
