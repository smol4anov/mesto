import { initialCards } from './cards.js';
import {
  validationSettings, title, subtitle, nameInput, aboutInput,
  cardsList, noPlaces, profilePopup, addPopup, editButton, addButton,
  popupForm, addPopupForm, placeInput, imageInput
} from './variables.js';
import { showPopup, closePopupByButton } from './commonFunction.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';


function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();
  title.textContent = nameInput.value;
  subtitle.textContent = aboutInput.value;
  closePopupByButton(evt);
}

const handleAddFormSubmit = evt => {
  evt.preventDefault();
  const card = new Card({ name: placeInput.value, link: imageInput.value }, '#element-template');
  cardsList.prepend(card.generateCard());
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
  const formValidator = new FormValidator(validationSettings, popupForm);
  formValidator.enableValidation();
  showPopup(profilePopup);
});

addButton.addEventListener('click', () => {
  addPopupForm.reset();
  const formValidator = new FormValidator(validationSettings, addPopupForm);
  formValidator.enableValidation();
  showPopup(addPopup);
});

function renderCards(cardsArray) {
  cardsArray.forEach((item) => {
    const card = new Card(item, '#element-template');
    cardsList.append(card.generateCard());
  });
}

popupForm.addEventListener('submit', handleEditProfileFormSubmit);

addPopupForm.addEventListener('submit', handleAddFormSubmit);

renderCards(initialCards);