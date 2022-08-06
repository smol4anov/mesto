(()=>{"use strict";var e={profileFormName:"profile-form",newCardFormName:"new-card-form",editAvatarFormName:"avatar-edit-form",cardListSelector:".elements__list",profileTitleSelector:".profile__title",profileAboutSelector:".profile__subtitle",profileAvatarSelector:".profile__avatar",imagePopupSelector:".popup_type_open-image",addPopupSelector:".popup_type_new-place",editPopupSelector:".popup_type_profile",editButtonSelector:".profile__edit-button",addButtonSelector:".profile__add-button",elementTemplateSelector:"#element-template",deletePopupSelector:".popup_type_delete-card",editAvatarPopupSelector:".popup_type_avatar-edit",errorPopupSelector:".popup_type_error"};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(){function e(t,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._cardSelector=r,this._title=t.name,this._image=t.link,this._cardId=t._id,this._likes=t.likes,this._ownerId=n,this._ownenCardId=t.owner._id,this._handleCardClick=o.handleCardClick,this._handleDeleteClick=o.handleDeleteClick,this._handleLikeButton=o.handleLikeButton,this.deleteCard=this.deleteCard.bind(this)}var n,r;return n=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_toggleLikeButtonType",value:function(e){e?this._likeButton.classList.add("element__button_active"):this._likeButton.classList.remove("element__button_active")}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){e._handleLikeButton(e._cardId,e._hasLike)})),this._deleteButton.addEventListener("click",(function(){e._handleDeleteClick(e._cardId)})),this._cardImage.addEventListener("click",(function(){e._handleCardClick({name:e._title,link:e._image})}))}},{key:"_findСomponents",value:function(){this._cardImage=this._element.querySelector(".element__image"),this._cardTitle=this._element.querySelector(".element__title"),this._likeButton=this._element.querySelector(".element__button"),this._deleteButton=this._element.querySelector(".element__delete"),this._likesCounter=this._element.querySelector(".element__likes-counter")}},{key:"_handleLikesArray",value:function(){var e=this;this._hasLike=this._likes.some((function(t){return t._id===e._ownerId})),this._toggleLikeButtonType(this._hasLike),this._likesCounter.textContent=this._likes.length,this._likes=null}},{key:"updateLikeInfo",value:function(e){this._likes=e.likes,this._handleLikesArray()}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._findСomponents(),this._setEventListeners(),this._cardImage.src=this._image,this._cardImage.alt=this._title,this._cardTitle.textContent=this._title,this._handleLikesArray(),this._ownerId!==this._ownenCardId&&this._deleteButton.remove(),this._element}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._settings=t,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._settings.inputSelector)),this._submitButton=this._formElement.querySelector(this._settings.submitButtonSelector)}var t,n;return t=e,(n=[{key:"_someInputIsNotValid",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._someInputIsNotValid()?(this._submitButton.classList.add(this._settings.inactiveButtonClass),this._submitButton.disabled=!0):(this._submitButton.classList.remove(this._settings.inactiveButtonClass),this._submitButton.disabled=!1)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-input-error"));e.classList.remove(this._settings.inputErrorClass),t.classList.remove(this._settings.errorClass),t.textContent=""}},{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-input-error"));e.classList.add(this._settings.inputErrorClass),n.textContent=t,n.classList.add(this._settings.errorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_checkFormValidity",value:function(e){this._checkInputValidity(e.target),this._toggleButtonState()}},{key:"_setEventListeners",value:function(){var e=this;this._formElement.addEventListener("input",(function(t){e._checkFormValidity(t)}))}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){return e._hideInputError(t)}))}},{key:"enableValidation",value:function(){this._setEventListeners(),this._toggleButtonState()}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.append(e)}},{key:"insertItem",value:function(e){this._container.prepend(e)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"setCardsInfo",value:function(e){this._renderedItems=e}},{key:"renderItems",value:function(){var e=this;this.clear(),this._renderedItems.forEach((function(t){e._renderer(t)}))}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._element=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"==e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._element.addEventListener("click",(function(t){t.target.classList.contains("popup__close")&&e.close()})),this._element.addEventListener("mousedown",(function(t){t.target===t.currentTarget&&e.close()}))}},{key:"open",value:function(){this._element.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._element.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=p(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},f.apply(this,arguments)}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function d(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._title=t._element.querySelector(".popup__subtitle"),t._link=t._element.querySelector(".popup__image"),t}return t=u,(n=[{key:"open",value:function(e){var t=e.name,n=e.link;this._title.textContent=t,this._link.src=n,this._link.alt=t,f(y(u.prototype),"open",this).call(this)}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(c);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function w(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleFormSubmit=t,n._form=n._element.querySelector(".popup__form"),n._inputList=n._form.querySelectorAll(".popup__input"),n._submitButton=n._form.querySelector(".popup__submit"),n._submitButtonText=n._submitButton.textContent,n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"savingInform",value:function(e){this._submitButton.textContent=e?"Сохранение...":this._submitButtonText}},{key:"setEventListeners",value:function(){var e=this;b(S(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e.savingInform(!0),e._handleFormSubmit(e._getInputValues())}))}},{key:"open",value:function(e){void 0!==e&&this._inputList.forEach((function(t){t.value=e[t.name]})),b(S(u.prototype),"open",this).call(this)}},{key:"close",value:function(){b(S(u.prototype),"close",this).call(this),this._form.reset()}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(c);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=L(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},P.apply(this,arguments)}function L(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}function j(e,t){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},j(e,t)}function I(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleYesButton=t,n._form=n._element.querySelector(".popup__delete-card-form"),n._submitButton=n._form.querySelector(".popup__submit"),n}return t=u,(n=[{key:"open",value:function(e,t){var n=this;this._cardId=e,this.deleteCard=t,P(B(u.prototype),"open",this).call(this),setTimeout((function(){return n._submitButton.focus()}),100)}},{key:"setEventListeners",value:function(){var e=this;P(B(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleYesButton(e._cardId)}))}},{key:"deleteElement",value:function(){this._cardElement.remove(),this._cardElement=null}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(c);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=x(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},A.apply(this,arguments)}function x(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=V(e)););return e}function U(e,t){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},U(e,t)}function D(e,t){if(t&&("object"===T(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function V(e){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},V(e)}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&U(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=V(r);if(o){var n=V(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return D(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._form=n._element.querySelector(".popup__error-form"),n._submitButton=n._form.querySelector(".popup__submit"),n._title=n._element.querySelector(".popup__title"),n._handleSubmitButtonClick=t,n}return t=u,(n=[{key:"open",value:function(e){var t=this;A(V(u.prototype),"open",this).call(this),this._title.textContent=e,setTimeout((function(){return t._submitButton.focus()}),100)}},{key:"setEventListeners",value:function(){var e=this;A(V(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitButtonClick()}))}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(c);function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var F=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(t.profileTitleSelector),this._about=document.querySelector(t.profileAboutSelector),this._avatar=document.querySelector(t.profileAvatarSelector),this._handleEditAvatarClick=n}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent,id:this._id}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._about.textContent=e.about,this._avatar.style.background="center / cover no-repeat url(".concat(e.avatar,")"),this._id=e._id}},{key:"setEventListeners",value:function(){this._avatar.addEventListener("click",this._handleEditAvatarClick)}}])&&H(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var J=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._cohortId=t.cohortId,this._token=t.token}var t,n;return t=e,(n=[{key:"_getHeaders",value:function(){return{authorization:this._token,"Content-Type":"application/json"}}},{key:"_handleRespons",value:function(e){return e.ok?e.json():(console.log(e),Promise.reject("Ошибка ".concat(e.status)))}},{key:"_getLikeMethod",value:function(e){return e?"DELETE":"PUT"}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl).concat(this._cohortId,"/users/me"),{headers:this._getHeaders()}).then(this._handleRespons)}},{key:"getCards",value:function(){return fetch("".concat(this._baseUrl).concat(this._cohortId,"/cards"),{headers:this._getHeaders()}).then(this._handleRespons)}},{key:"sendUserInfo",value:function(e){return fetch("".concat(this._baseUrl).concat(this._cohortId,"/users/me"),{headers:this._getHeaders(),method:"PATCH",body:JSON.stringify(e)}).then(this._handleRespons)}},{key:"addNewCard",value:function(e){return fetch("".concat(this._baseUrl).concat(this._cohortId,"/cards"),{headers:this._getHeaders(),method:"POST",body:JSON.stringify(e)}).then(this._handleRespons)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl).concat(this._cohortId,"/cards/").concat(e),{headers:this._getHeaders(),method:"DELETE"}).then(this._handleRespons)}},{key:"likeCard",value:function(e,t){return fetch("".concat(this._baseUrl).concat(this._cohortId,"/cards/").concat(e,"/likes"),{headers:this._getHeaders(),method:this._getLikeMethod(t)}).then(this._handleRespons)}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._baseUrl).concat(this._cohortId,"/users/me/avatar"),{headers:this._getHeaders(),method:"PATCH",body:JSON.stringify(e)}).then(this._handleRespons)}}])&&M(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var z,$={},G=document.querySelector(e.editButtonSelector),K=document.querySelector(e.addButtonSelector),Q=new J({baseUrl:"https://mesto.nomoreparties.co/v1/",cohortId:"cohort-47",token:"2746e8e2-7af3-4dd8-911a-e5e0181278d6"}),W=new F(e,(function(){$[e.editAvatarFormName].resetValidation(),ie.open()})),X=new u({items:[],renderer:function(e){var t=Z(e);X.addItem(t)}},e.cardListSelector),Z=function(t){var r=new n(t,W.getUserInfo().id,e.elementTemplateSelector,{handleCardClick:function(e){return ee.open(e)},handleDeleteClick:function(e){return re.open(e,r.deleteCard)},handleLikeButton:function(e,t){return Q.likeCard(e,t).then((function(e){return r.updateLikeInfo(e)}))}});return r.generateCard()},ee=new _(e.imagePopupSelector),te=new O(e.addPopupSelector,(function(e){Q.addNewCard({name:e.place,link:e.image}).then((function(e){var t=Z(e);X.insertItem(t),te.close()})).catch((function(e){return oe.open("".concat(e," при добавлении новой карточки. Скоро исправим!"))})).finally((function(){return te.savingInform(!1)}))})),ne=new O(e.editPopupSelector,(function(e){Q.sendUserInfo(e).then((function(e){W.setUserInfo(e),ne.close()})).catch((function(e){return oe.open("".concat(e," при редактировании профиля. Уже чиним!"))})).finally((function(){return ne.savingInform(!1)}))})),re=new R(e.deletePopupSelector,(function(e){Q.deleteCard(e).then((function(){re.deleteCard(),re.close()})).catch((function(e){return oe.open("".concat(e," при удалении карточки. Попробуйте позже"))}))})),oe=new N(e.errorPopupSelector,(function(){return oe.close()})),ie=new O(e.editAvatarPopupSelector,(function(e){Q.updateAvatar(e).then((function(e){W.setUserInfo(e),ie.close()})).catch((function(e){return oe.open("".concat(e," при загрузке аватарки. Уже чиним!"))})).finally((function(){return ie.savingInform(!1)}))}));W.setEventListeners(),ee.setEventListeners(),te.setEventListeners(),ne.setEventListeners(),re.setEventListeners(),ie.setEventListeners(),oe.setEventListeners(),G.addEventListener("click",(function(){$[e.profileFormName].resetValidation();var t=W.getUserInfo();ne.open(t)})),K.addEventListener("click",(function(){$[e.newCardFormName].resetValidation(),te.open()})),Promise.all([Q.getUserInfo(),Q.getCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return Y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Y(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];W.setUserInfo(o),X.setCardsInfo(i),X.renderItems()})).catch((function(e){return oe.open("".concat(e," при получении данных. Скоро исправим!"))})),z={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},Array.from(document.querySelectorAll(z.formSelector)).forEach((function(e){var t=new o(z,e),n=e.getAttribute("name");$[n]=t,t.enableValidation()}))})();