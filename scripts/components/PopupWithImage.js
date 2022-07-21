import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._title = this._element.querySelector('.popup__subtitle');
    this._link = this._element.querySelector('.popup__image');
  }

  open({ name, link }) {
    this._title.textContent = name;
    this._link.src = link;
    this._link.alt = name;
    super.open();
  }
}