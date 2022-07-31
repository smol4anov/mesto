import Popup from "./Popup";

export default class PopupConfirmation extends Popup {
  constructor(popupSelector, handleYesButton) {
    super(popupSelector);
    this._handleYesButton = handleYesButton;
    this._form = this._element.querySelector('.popup__form');
    this._submitButton = this._form.querySelector('.popup__submit');
  }

  open(cardId) {
    this._cardId = cardId;
    super.open();
    this._submitButton.focus();
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleYesButton(this._cardId);
    });
  }
}