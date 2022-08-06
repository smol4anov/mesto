import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._element.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._submitButton = this._form.querySelector('.popup__submit');
    this._submitButtonText = this._submitButton.textContent;
  }

  _getInputValues() {
    this._formValues = {};

    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  savingInform(isSaving) {
    this._submitButton.textContent =
      isSaving ? 'Сохранение...' : this._submitButtonText;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.savingInform(true);
      this._handleFormSubmit(this._getInputValues());
    });
  }

  open(data) {
    if (data !== undefined) {
      this._inputList.forEach(input => {
        input.value = data[input.name];
      });
    };
    super.open();
  }

  close() {
    super.close();
    this._form.reset();
  }
}
