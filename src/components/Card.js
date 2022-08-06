export default class Card {
  constructor(data, ownerId, cardSelector, handlers) {
    this._cardSelector = cardSelector;
    this._title = data.name;
    this._image = data.link;
    this._cardId = data._id;
    this._likes = data.likes;
    this._ownerId = ownerId;
    this._ownenCardId = data.owner._id;
    this._handleCardClick = handlers.handleCardClick;
    this._handleDeleteClick = handlers.handleDeleteClick;
    this._handleLikeButton = handlers.handleLikeButton;
    this.deleteCard = this.deleteCard.bind(this);
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  _toggleLikeButtonType(isLike) {
    isLike ? this._likeButton.classList.add('element__button_active') :
      this._likeButton.classList.remove('element__button_active');
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._handleLikeButton(this._cardId, this._hasLike);
    });

    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteClick(this._cardId);
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick({ name: this._title, link: this._image });
    });
  }

  _findСomponents() {
    this._cardImage = this._element.querySelector('.element__image');
    this._cardTitle = this._element.querySelector('.element__title');
    this._likeButton = this._element.querySelector('.element__button');
    this._deleteButton = this._element.querySelector('.element__delete');
    this._likesCounter = this._element.querySelector('.element__likes-counter');
  }

  _handleLikesArray() {
    this._hasLike = this._likes.some(item => item._id === this._ownerId);
    this._toggleLikeButtonType(this._hasLike);
    this._likesCounter.textContent = this._likes.length;
    this._likes = null;
  }

  updateLikeInfo(data) {
    this._likes = data.likes;
    this._handleLikesArray();
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._findСomponents();
    this._setEventListeners();

    this._cardImage.src = this._image;
    this._cardImage.alt = this._title;
    this._cardTitle.textContent = this._title;
    this._handleLikesArray();

    if (this._ownerId !== this._ownenCardId) this._deleteButton.remove();

    return this._element;
  }
}