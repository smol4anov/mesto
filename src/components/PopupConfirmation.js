import Popup from "./Popup";

export default class PopupConfirmation extends Popup {
  constructor(popupSelector, handleYesButton) {
    super(popupSelector);
    this._handleYesButton = handleYesButton;
    this._form = this._element.querySelector('.popup__delete-card-form');
    this._submitButton = this._form.querySelector('.popup__submit');
  }

  open(cardId, handleDeleteCard) {
    this._cardId = cardId;
    this.deleteCard = handleDeleteCard;
    super.open();
    setTimeout(() => this._submitButton.focus(), 100);
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleYesButton(this._cardId);
    });
  }

  deleteElement() {
    this._cardElement.remove();
    this._cardElement = null;
  }
}