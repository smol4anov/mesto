export class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._cardSelector = cardSelector;
    this._title = data.name;
    this._image = data.link;
    this._handleCardClick = handleCardClick;
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
    this._likeButton.classList.toggle('element__button_active');
  }

  _handleDeleteButton() {
    this._element.remove();
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._handleLikeButton();
    });

    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteButton();
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._title, this._image);
    });
  }

  _findСomponents() {
    this._cardImage = this._element.querySelector('.element__image');
    this._cardTitle = this._element.querySelector('.element__title');
    this._likeButton = this._element.querySelector('.element__button');
    this._deleteButton = this._element.querySelector('.element__delete');
  }

  generateCard() {
    this._element = this._getTemplate();
    this._findСomponents();
    this._setEventListeners();

    this._cardImage.src = this._image;
    this._cardImage.alt = this._title;
    this._cardTitle.textContent = this._title;

    return this._element;
  }
}