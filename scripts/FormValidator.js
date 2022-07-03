export class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._formElement = formElement;
  }

  _someInputIsNotValid() {
    return Array.from(this._formElement.querySelectorAll(this._inputSelector))
      .some((inputElement) => {
        return !inputElement.validity.valid;
      });
  }

  _toggleButtonState() {
    const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    if (this._someInputIsNotValid()) {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.disabled = false;
    }
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-input-error`);

    inputElement.classList.remove('popup__input_type_error');
    errorElement.classList.remove('popup__input-error_active');
    errorElement.textContent = '';
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-input-error`);

    inputElement.classList.add('popup__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_active');
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _resetInputError() {
    Array.from(this._formElement.querySelectorAll(this._inputSelector))
      .forEach(item => this._hideInputError(item));
  }

  _checkFormValidity(evt) {
    this._checkInputValidity(evt.target);
    this._toggleButtonState();
  }

  _setEventListeners() {
    this._formElement.addEventListener('input', (evt) => {
      this._checkFormValidity(evt);
    });
  }

  enableValidation() {
    this._resetInputError();
    this._setEventListeners();
    this._toggleButtonState();
  }
}