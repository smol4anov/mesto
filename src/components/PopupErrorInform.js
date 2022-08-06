import Popup from "./Popup";

export default class PopupErrorInform extends Popup {
  constructor(popupSelector, handleSubmitButtonClick) {
    super(popupSelector);
    this._form = this._element.querySelector('.popup__error-form');
    this._submitButton = this._form.querySelector('.popup__submit');
    this._title = this._element.querySelector('.popup__title');
    this._handleSubmitButtonClick = handleSubmitButtonClick; 
  }

  open(title) {
    super.open();
    this._title.textContent = title;
    setTimeout(() => this._submitButton.focus(), 100);
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmitButtonClick();
    });
  }
}