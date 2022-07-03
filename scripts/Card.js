import { imagePopupTitle, imagePopupLink, imagePopup } from './variables.js';
import { showPopup } from './commonFunction.js';

export class Card {
  constructor(data, cardSelector) {
    this._cardSelector = cardSelector;
    this._title = data.name;
    this._image = data.link;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  _handleLikeButton() {
    this._element.querySelector('.element__button')
      .classList.toggle('element__button_active');
  }

  _handleDeleteButton() {
    this._element.remove();
  }

  _openImage() {
    imagePopupTitle.textContent = this._title;
    imagePopupLink.src = this._image;
    imagePopupLink.alt = this._title;

    showPopup(imagePopup);
  }

  _setEventListeners() {
    this._element.querySelector('.element__button')
      .addEventListener('click', () => {
        this._handleLikeButton();
      });

    this._element.querySelector('.element__delete')
      .addEventListener('click', () => {
        this._handleDeleteButton();
      });

    this._element.querySelector('.element__image')
      .addEventListener('click', () => {
        this._openImage();
      });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.element__image').src = this._image;
    this._element.querySelector('.element__title').textContent = this._title;

    return this._element;
  }
}