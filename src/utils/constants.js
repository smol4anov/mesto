export const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

export const pageSelectors = {
  profileFormName: 'profile-form',
  newCardFormName: 'new-card-form',
  cardListSelector: '.elements__list',
  profileTitleSelector: '.profile__title',
  profileAboutSelector: '.profile__subtitle',
  profileAvatarSelector: '.profile__avatar',
  imagePopupSelector: '.popup_type_open-image',
  addPopupSelector: '.popup_type_new-place',
  editPopupSelector: '.popup_type_profile',
  editButtonSelector:'.profile__edit-button',
  addButtonSelector: '.profile__add-button',
  elementTemplateSelector: '#element-template',
  deletePopupSelector: '.popup_type_delete-card',
  editAvatarPopupSelector: '.popup_type_avatar-edit',
  errorPopupSelector: '.popup_type_error'
};

export const apiConstants = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/',
  cohortId: 'cohort-47',
  token: '2746e8e2-7af3-4dd8-911a-e5e0181278d6'
};