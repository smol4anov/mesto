import './index.css';

import { initialCards, validationSettings, pageSelectors } from '../utils/constants.js';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupConfirmation from '../components/PopupConfirmation.js';
import UserInfo from '../components/UserInfo.js';

const formValidators = {};

const editButton = document.querySelector(pageSelectors.editButtonSelector);

const addButton = document.querySelector(pageSelectors.addButtonSelector);

function createCard(item) {
  const card = new Card(
    item, 
    pageSelectors.elementTemplateSelector, 
    (data) => imagePopup.open(data),
    (cardId) => deletePopup.open(card._cardId));
  return card.generateCard();
}

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item);
    cardList.addItem(cardElement);
  }
}, pageSelectors.cardListSelector);

const userInfo = new UserInfo({ 
  nameSelector: pageSelectors.profileTitleSelector, 
  aboutSelector: pageSelectors.profileAboutSelector 
});

const imagePopup = new PopupWithImage(pageSelectors.imagePopupSelector);
imagePopup.setEventListeners();

const addPopup = new PopupWithForm(pageSelectors.addPopupSelector, (data) => {
  const cardElement = createCard({ name: data.place, link: data.image });
  cardList.insertItem(cardElement);
  addPopup.close();
});
addPopup.setEventListeners();

const editPopup = new PopupWithForm(pageSelectors.editPopupSelector, (data) => {
  userInfo.setUserInfo(data);
  editPopup.close();
});
editPopup.setEventListeners();

const deletePopup = new PopupConfirmation('.popup_type_delete-card', (cardId) => {
  console.log(cardId);
  deletePopup.close();
});
deletePopup.setEventListeners();

const enableValidation = (config) => {
  Array.from(document.querySelectorAll(config.formSelector))
    .forEach((formElement) => {
      const validator = new FormValidator(config, formElement);
      const formName = formElement.getAttribute('name');
      formValidators[formName] = validator;
      validator.enableValidation();
    });
};

editButton.addEventListener('click', () => {
  formValidators[pageSelectors.profileFormName].resetValidation();
  const userData = userInfo.getUserInfo();
  editPopup.open(userData);
});

addButton.addEventListener('click', () => {
  formValidators[pageSelectors.newCardFormName].resetValidation();
  addPopup.open();
});

cardList.renderItems();

enableValidation(validationSettings);