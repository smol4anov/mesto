export default class UserInfo {
  constructor(selectors, handleEditAvatarClick) {
    this._name = document.querySelector(selectors.profileTitleSelector);
    this._about = document.querySelector(selectors.profileAboutSelector);
    this._avatar = document.querySelector(selectors.profileAvatarSelector);
    this._handleEditAvatarClick = handleEditAvatarClick;
  }

  getUserInfo() {
    return ({
      name: this._name.textContent,
      about: this._about.textContent,
      id: this._id
    });
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._about.textContent = data.about;
    this._avatar.style.background = `center / cover no-repeat url(${data.avatar})`;
    this._id = data._id;
  }
  
  setEventListeners() {
    this._avatar.addEventListener('click', this._handleEditAvatarClick);
  }
}