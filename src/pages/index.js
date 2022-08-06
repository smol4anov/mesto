import './index.css';

import { validationSettings, pageSelectors, apiConstants } from '../utils/constants.js';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupConfirmation from '../components/PopupConfirmation.js';
import PopupErrorInform from '../components/PopupErrorInform.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

const formValidators = {};

const editButton = document.querySelector(pageSelectors.editButtonSelector);
const addButton = document.querySelector(pageSelectors.addButtonSelector);

const api = new Api(apiConstants);
const userInfo = new UserInfo(pageSelectors, () => editAvatarPopup.open());

const cardList = new Section({
  items: [],
  renderer: (item) => {
    const cardElement = createCard(item);
    cardList.addItem(cardElement);
  }
}, pageSelectors.cardListSelector);

const createCard = (item) => {
  const card = new Card(
    item,
    userInfo.getUserInfo().id,
    pageSelectors.elementTemplateSelector,
    {
      handleCardClick: (data) => imagePopup.open(data),
      handleDeleteClick: (cardId) => deletePopup.open(cardId, card.deleteCard),
      handleLikeButton: (cardId, deleteLike) => api.likeCard(cardId, deleteLike).then(res => card.updateLikeInfo(res))
    });
  return card.generateCard();
}

const imagePopup = new PopupWithImage(pageSelectors.imagePopupSelector);

const addPopup = new PopupWithForm(pageSelectors.addPopupSelector, (data) => {
  api.addNewCard({ name: data.place, link: data.image })
    .then(res => {
      const cardElement = createCard(res);
      cardList.insertItem(cardElement);
    })
    .catch(res => errorPopup.open(`${res} при добавлении новой карточки. Скоро исправим!`))
    .finally(() => editPopup.savingInform(false));
  addPopup.close();
});

const editPopup = new PopupWithForm(pageSelectors.editPopupSelector, (data) => {
  api.sendUserInfo(data)
    .then(res => userInfo.setUserInfo(res))
    .catch(res => errorPopup.open(`${res} при редактировании профиля. Уже чиним!`))
    .finally(() => editPopup.savingInform(false));
  editPopup.close();
});

const deletePopup = new PopupConfirmation(pageSelectors.deletePopupSelector, (cardId) => {
  api.deleteCard(cardId)
    .then(() => deletePopup.deleteCard())
    .catch(res => errorPopup.open(`${res} при удалении карточки. Попробуйте позже`));
  deletePopup.close();
});

const errorPopup = new PopupErrorInform(pageSelectors.errorPopupSelector, 
  () => errorPopup.close());

const editAvatarPopup = new PopupWithForm(pageSelectors.editAvatarPopupSelector, (data) => {
  api.updateAvatar(data)
    .then(res => userInfo.setUserInfo(res))
    .catch(res => errorPopup.open(`${res} при загрузке аватарки. Уже чиним!`))
    .finally(() => editPopup.savingInform(false));
  editAvatarPopup.close();
});

const enableValidation = (config) => {
  Array.from(document.querySelectorAll(config.formSelector))
    .forEach((formElement) => {
      const validator = new FormValidator(config, formElement);
      const formName = formElement.getAttribute('name');
      formValidators[formName] = validator;
      validator.enableValidation();
    });
};

userInfo.setEventListeners();
imagePopup.setEventListeners();
addPopup.setEventListeners();
editPopup.setEventListeners();
deletePopup.setEventListeners();
editAvatarPopup.setEventListeners();
errorPopup.setEventListeners();

editButton.addEventListener('click', () => {
  formValidators[pageSelectors.profileFormName].resetValidation();
  const userData = userInfo.getUserInfo();
  editPopup.open(userData);
});

addButton.addEventListener('click', () => {
  formValidators[pageSelectors.newCardFormName].resetValidation();
  addPopup.open();
});

Promise.all([api.getUserInfo(), api.getCards()])
  .then(([resUserInfo, resCards]) => {
    userInfo.setUserInfo(resUserInfo);
    cardList.setCardsInfo(resCards);
    cardList.renderItems();
  })
  .catch(res => errorPopup.open(`${res} при получении данных. Скоро исправим!`));

enableValidation(validationSettings);