/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_MODES__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/MODES */ "./src/js/MODES.js");
/* harmony import */ var _js_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/container */ "./src/js/container.js");
/* harmony import */ var _js_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/data */ "./src/js/data.js");
/* harmony import */ var _js_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/card */ "./src/js/card.js");

 //i left this modules for future, if they wouldn't help me, i will delete them


 // DONT FORGET
// в футере приложения есть ссылка на гитхаб автора,
// год создания приложения, логотип курса со
//ссылкой на курс

var page = new _js_container__WEBPACK_IMPORTED_MODULE_1__.Container(_js_MODES__WEBPACK_IMPORTED_MODULE_0__.MODES.train);
page.createMainPage();
var numberOfTheme = 0; //MENU-NAV//

var checkbox = document.querySelector('#myInput');
var icon = document.querySelector('#menuToggle span');

var listener = function listener(e) {
  if (e.target != checkbox && e.target != icon) {
    checkbox.checked = false;
    document.removeEventListener('click', listener);
  }
};

checkbox.addEventListener('click', function () {
  if (this.checked) {
    document.addEventListener('click', listener);
  }
}); //---------Menu(moving)-------------//

function locationHashChanged() {
  page.clearContainer();

  switch (location.hash) {
    case '#mainPage':
      page.createMainPage();
      numberOfTheme = 0;
      break;

    case '#action(setA)':
      page.createContainerGame(1);
      numberOfTheme = 1;
      break;

    case '#action(setB)':
      page.createContainerGame(2);
      numberOfTheme = 2;
      break;

    case '#animal(setA)':
      page.createContainerGame(3);
      numberOfTheme = 3;
      break;

    case '#animal(setB)':
      page.createContainerGame(4);
      numberOfTheme = 4;
      break;

    case '#clothes(setA)':
      page.createContainerGame(5);
      numberOfTheme = 5;
      break;

    case '#clothes(setB)':
      page.createContainerGame(6);
      numberOfTheme = 6;
      break;

    case '#emotions(setA)':
      page.createContainerGame(7);
      numberOfTheme = 7;
      break;

    case '#emotions(setB)':
      page.createContainerGame(8);
      numberOfTheme = 8;
      break;
  }

  document.querySelectorAll('a').forEach(function (e) {
    e.classList.remove('currentPage');
  });
  document.getElementById("".concat(numberOfTheme)).classList.add('currentPage');
}

window.onhashchange = locationHashChanged; //SWITCHER//

var switcher = document.querySelector('.switcher');
switcher.addEventListener('click', function () {
  switcher.classList.toggle('active');
  Array.from(document.querySelectorAll('.switcher-label')).forEach(function (element) {
    return element.classList.toggle('mode');
  });
  page.clearContainer();
  document.querySelector('.header').classList.toggle('game-header'); //switch main function//

  page.mode == _js_MODES__WEBPACK_IMPORTED_MODULE_0__.MODES.train ? page.mode = _js_MODES__WEBPACK_IMPORTED_MODULE_0__.MODES.play : page.mode = _js_MODES__WEBPACK_IMPORTED_MODULE_0__.MODES.train;
  if (numberOfTheme != 0) page.createContainerGame(numberOfTheme);else page.createMainPage();
});

/***/ }),

/***/ "./src/js/MODES.js":
/*!*************************!*\
  !*** ./src/js/MODES.js ***!
  \*************************/
/*! namespace exports */
/*! export MODES [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MODES": () => /* binding */ MODES
/* harmony export */ });
var MODES = {
  train: 'train',
  play: 'play'
};

/***/ }),

/***/ "./src/js/card.js":
/*!************************!*\
  !*** ./src/js/card.js ***!
  \************************/
/*! namespace exports */
/*! export Card [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": () => /* binding */ Card
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/js/data.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var pageContainer = document.querySelector('#pageContainer');
var Card = /*#__PURE__*/function () {
  function Card(theme, numberOfword) {
    _classCallCheck(this, Card);

    this.theme = theme;
    this.numberOfword = numberOfword;
  } //create card//


  _createClass(Card, [{
    key: "createTrainCard",
    value: function createTrainCard() {
      var card = document.createElement('div');
      card.className = 'card'; //FRONT//

      var front = document.createElement('div');
      front.className = 'front'; //---------------//

      var imgFlip = document.createElement('img');
      imgFlip.src = 'img/rotate.svg';
      imgFlip.className = 'img-flip';
      front.appendChild(imgFlip);
      var imgF = document.createElement('img');
      imgF.src = "".concat(_data__WEBPACK_IMPORTED_MODULE_0__.input[this.theme][this.numberOfword].image);
      imgF.className = 'card-img-top';
      imgF.alt = "".concat(_data__WEBPACK_IMPORTED_MODULE_0__.input[this.theme][this.numberOfword].word);
      front.appendChild(imgF); // front.appendChild(imgFlip);
      //---------------//

      var cardBody = document.createElement('div');
      cardBody.className = 'card-body'; //---------------//

      var text = document.createElement('p');
      text.className = 'card-text';
      text.innerHTML = "".concat(_data__WEBPACK_IMPORTED_MODULE_0__.input[this.theme][this.numberOfword].word); //---------------//

      cardBody.appendChild(text);
      front.appendChild(cardBody);
      card.appendChild(front); //BACK//

      var back = document.createElement('div');
      back.className = 'back'; //---------------//

      var imgB = document.createElement('img');
      imgB.src = "".concat(_data__WEBPACK_IMPORTED_MODULE_0__.input[this.theme][this.numberOfword].image);
      imgB.className = 'card-img-top';
      imgB.alt = "".concat(_data__WEBPACK_IMPORTED_MODULE_0__.input[this.theme][this.numberOfword].translation);
      back.appendChild(imgB); //---------------//

      var cardBodyB = document.createElement('div');
      cardBodyB.className = 'card-body'; //---------------//

      var textB = document.createElement('p');
      textB.className = 'card-text';
      textB.innerHTML = "".concat(_data__WEBPACK_IMPORTED_MODULE_0__.input[this.theme][this.numberOfword].translation);
      cardBodyB.appendChild(textB);
      back.appendChild(cardBodyB);
      card.appendChild(back); //

      pageContainer.appendChild(card); //---------------//

      var audioCard = new Audio("".concat(_data__WEBPACK_IMPORTED_MODULE_0__.input[this.theme][this.numberOfword].audioSrc)); //FLIP//

      imgFlip.addEventListener('click', function () {
        card.classList.toggle('flipped');
      });
      card.addEventListener('click', function () {
        audioCard.play();
      });
      card.addEventListener("mouseleave", function () {
        card.classList.remove('flipped');
      });
    }
  }, {
    key: "createPlayCard",
    value: function createPlayCard() {
      var card = document.createElement('div');
      card.className = 'card card-play';
      card.style = 'background-image: linear-gradient(to top, #c471f5 0%, #fa71cd 100%);'; //---------------///

      var img = document.createElement('img');
      img.src = "".concat(_data__WEBPACK_IMPORTED_MODULE_0__.input[this.theme][this.numberOfword].image);
      img.className = 'card-img-top';
      img.alt = "".concat(_data__WEBPACK_IMPORTED_MODULE_0__.input[this.theme][this.numberOfword].word);
      card.appendChild(img); //---------------///

      var cardBody = document.createElement('div');
      cardBody.className = 'card-body';
      var text = document.createElement('p'); //---------------///

      text.className = 'card-text play-text';
      text.innerHTML = "".concat(_data__WEBPACK_IMPORTED_MODULE_0__.input[this.theme][this.numberOfword].translation);
      cardBody.appendChild(text);
      card.appendChild(cardBody); //---------------///

      pageContainer.appendChild(card);
    }
  }, {
    key: "createMainPageCard",
    value: function createMainPageCard() {
      var card = document.createElement('div');
      card.className = 'card main-card';
      card.style = 'background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);'; //---------------///

      var img = document.createElement('img');
      img.src = "".concat(_data__WEBPACK_IMPORTED_MODULE_0__.input[this.numberOfword][0].image);
      img.className = 'card-img-top';
      img.alt = "".concat(_data__WEBPACK_IMPORTED_MODULE_0__.input[0][this.numberOfword]);
      card.appendChild(img); //---------------///

      var cardBody = document.createElement('div');
      cardBody.className = 'card-body';
      var text = document.createElement('p'); //---------------///

      text.className = 'card-text';
      text.innerHTML = "".concat(_data__WEBPACK_IMPORTED_MODULE_0__.input[0][this.numberOfword - 1]);
      cardBody.appendChild(text);
      card.appendChild(cardBody);
      var a = document.createElement('a');
      a.className = 'a-card';

      switch (this.numberOfword - 1) {
        case 0:
          a.href = '#action(setA)';
          break;

        case 1:
          a.href = '#action(setB)';
          break;

        case 2:
          a.href = '#animal(setA)';
          break;

        case 3:
          a.href = '#animal(setB)';
          break;

        case 4:
          a.href = '#clothes(setA)';
          break;

        case 5:
          a.href = '#clothes(setB)';
          break;

        case 6:
          a.href = '#emotions(setA)';
          break;

        case 7:
          a.href = '#emotions(setB)';
          break;
      }

      a.appendChild(card); //---------------///

      pageContainer.appendChild(a);
    }
  }]);

  return Card;
}();

/***/ }),

/***/ "./src/js/container.js":
/*!*****************************!*\
  !*** ./src/js/container.js ***!
  \*****************************/
/*! namespace exports */
/*! export Container [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": () => /* binding */ Container
/* harmony export */ });
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "./src/js/card.js");
/* harmony import */ var _MODES__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MODES */ "./src/js/MODES.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./src/js/game.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var main = document.querySelector('#main');
var pageContainer = document.querySelector('#pageContainer');
var Container = /*#__PURE__*/function () {
  function Container(mode) {
    _classCallCheck(this, Container);

    this.mode = mode;
  }

  _createClass(Container, [{
    key: "createContainerGame",
    value: function createContainerGame(theme) {
      switch (this.mode) {
        case _MODES__WEBPACK_IMPORTED_MODULE_1__.MODES.train:
          for (var i = 0; i < 8; i++) {
            var card = new _card__WEBPACK_IMPORTED_MODULE_0__.Card(theme, i);
            card.createTrainCard();
          }

          break;

        case _MODES__WEBPACK_IMPORTED_MODULE_1__.MODES.play:
          (0,_game__WEBPACK_IMPORTED_MODULE_2__.game)(theme);
          break;
      }
    }
  }, {
    key: "createMainPage",
    value: function createMainPage() {
      for (var i = 1; i < 9; i++) {
        var card = new _card__WEBPACK_IMPORTED_MODULE_0__.Card(0, i);
        card.createMainPageCard();
      }
    }
  }, {
    key: "clearContainer",
    value: function clearContainer() {
      while (pageContainer.firstChild) {
        pageContainer.removeChild(pageContainer.firstChild);
      }

      if (main.classList.contains('play-main')) {
        main.classList.remove('play-main');
        main.removeChild(document.querySelector('#scale'));
        main.removeChild(document.querySelector('.btn'));
      }
    }
  }]);

  return Container;
}();

/***/ }),

/***/ "./src/js/createArrayAudio.js":
/*!************************************!*\
  !*** ./src/js/createArrayAudio.js ***!
  \************************************/
/*! namespace exports */
/*! export createArrayAudio [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createArrayAudio": () => /* binding */ createArrayAudio
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/js/data.js");

function createArrayAudio(theme) {
  var arr = [];

  for (var i = 0; i < 8; i++) {
    arr.push("".concat(_data__WEBPACK_IMPORTED_MODULE_0__.input[2][i].audioSrc));
  }

  console.log(arr);
  return arr;
}

/***/ }),

/***/ "./src/js/createButton.js":
/*!********************************!*\
  !*** ./src/js/createButton.js ***!
  \********************************/
/*! namespace exports */
/*! export createButtonStart [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createButtonStart": () => /* binding */ createButtonStart
/* harmony export */ });
var main = document.querySelector('#main');
function createButtonStart() {
  var btn = document.createElement('button');
  btn.className = 'btn btn-start';
  btn.innerText = 'Start game';
  main.prepend(btn);
}

/***/ }),

/***/ "./src/js/createScale.js":
/*!*******************************!*\
  !*** ./src/js/createScale.js ***!
  \*******************************/
/*! namespace exports */
/*! export createScale [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createScale": () => /* binding */ createScale
/* harmony export */ });
var main = document.querySelector('#main');
function createScale() {
  var scale = document.createElement('div');
  scale.id = 'scale';
  main.prepend(scale);
}

/***/ }),

/***/ "./src/js/data.js":
/*!************************!*\
  !*** ./src/js/data.js ***!
  \************************/
/*! namespace exports */
/*! export input [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "input": () => /* binding */ input
/* harmony export */ });
var input = [['Action (set A)', 'Action (set B)', 'Animal (set A)', 'Animal (set B)', 'Clothes (set A)', 'Clothes (set B)', 'Emotions (set A)', 'Emotions (set B)'], //Action (set A)
[{
  word: 'cry',
  translation: 'плакать',
  image: 'img/cry.jpg',
  audioSrc: 'audio/cry.mp3'
}, {
  word: 'dance',
  translation: 'танцевать',
  image: 'img/dance.jpg',
  audioSrc: 'audio/dance.mp3'
}, {
  word: 'dive',
  translation: 'нырять',
  image: 'img/dive.jpg',
  audioSrc: 'audio/dive.mp3'
}, {
  word: 'draw',
  translation: 'рисовать',
  image: 'img/draw.jpg',
  audioSrc: 'audio/draw.mp3'
}, {
  word: 'fish',
  translation: 'ловить рыбу',
  image: 'img/fish.jpg',
  audioSrc: 'audio/fish.mp3'
}, {
  word: 'fly',
  translation: 'летать',
  image: 'img/fly.jpg',
  audioSrc: 'audio/fly.mp3'
}, {
  word: 'hug',
  translation: 'обнимать',
  image: 'img/hug.jpg',
  audioSrc: 'audio/hug.mp3'
}, {
  word: 'jump',
  translation: 'прыгать',
  image: 'img/jump.jpg',
  audioSrc: 'audio/jump.mp3'
}], //Action (set B)
[{
  word: 'open',
  translation: 'открывать',
  image: 'img/open.jpg',
  audioSrc: 'audio/open.mp3'
}, {
  word: 'play',
  translation: 'играть',
  image: 'img/play.jpg',
  audioSrc: 'audio/play.mp3'
}, {
  word: 'point',
  translation: 'указывать',
  image: 'img/point.jpg',
  audioSrc: 'audio/point.mp3'
}, {
  word: 'ride',
  translation: 'ездить',
  image: 'img/ride.jpg',
  audioSrc: 'audio/ride.mp3'
}, {
  word: 'run',
  translation: 'бегать',
  image: 'img/run.jpg',
  audioSrc: 'audio/run.mp3'
}, {
  word: 'sing',
  translation: 'петь',
  image: 'img/sing.jpg',
  audioSrc: 'audio/sing.mp3'
}, {
  word: 'skip',
  translation: 'прыгать',
  image: 'img/skip.jpg',
  audioSrc: 'audio/skip.mp3'
}, {
  word: 'swim',
  translation: 'плавать',
  image: 'img/swim.jpg',
  audioSrc: 'audio/swim.mp3'
}], //Animal (set A)
[{
  word: 'cat',
  translation: 'кот',
  image: 'img/cat.jpg',
  audioSrc: 'audio/cat.mp3'
}, {
  word: 'chick',
  translation: 'цыплёнок',
  image: 'img/chick.jpg',
  audioSrc: 'audio/chick.mp3'
}, {
  word: 'chicken',
  translation: 'курица',
  image: 'img/chicken.jpg',
  audioSrc: 'audio/chicken.mp3'
}, {
  word: 'dog',
  translation: 'собака',
  image: 'img/dog.jpg',
  audioSrc: 'audio/dog.mp3'
}, {
  word: 'horse',
  translation: 'лошадь',
  image: 'img/horse.jpg',
  audioSrc: 'audio/horse.mp3'
}, {
  word: 'pig',
  translation: 'свинья',
  image: 'img/pig.jpg',
  audioSrc: 'audio/pig.mp3'
}, {
  word: 'rabbit',
  translation: 'кролик',
  image: 'img/rabbit.jpg',
  audioSrc: 'audio/rabbit.mp3'
}, {
  word: 'sheep',
  translation: 'овца',
  image: 'img/sheep.jpg',
  audioSrc: 'audio/sheep.mp3'
}], //Animal (set B)
[{
  word: 'bird',
  translation: 'птица',
  image: 'img/bird.jpg',
  audioSrc: 'audio/bird.mp3'
}, {
  word: 'fish',
  translation: 'рыба',
  image: 'img/fish1.jpg',
  audioSrc: 'audio/fish.mp3'
}, {
  word: 'frog',
  translation: 'жаба',
  image: 'img/frog.jpg',
  audioSrc: 'audio/frog.mp3'
}, {
  word: 'giraffe',
  translation: 'жирафа',
  image: 'img/giraffe.jpg',
  audioSrc: 'audio/giraffe.mp3'
}, {
  word: 'lion',
  translation: 'лев',
  image: 'img/lion.jpg',
  audioSrc: 'audio/lion.mp3'
}, {
  word: 'mouse',
  translation: 'мышь',
  image: 'img/mouse.jpg',
  audioSrc: 'audio/mouse.mp3'
}, {
  word: 'turtle',
  translation: 'черепаха',
  image: 'img/turtle.jpg',
  audioSrc: 'audio/turtle.mp3'
}, {
  word: 'dolphin',
  translation: 'дельфин',
  image: 'img/dolphin.jpg',
  audioSrc: 'audio/dolphin.mp3'
}], //Clothes (set A)
[{
  word: 'skirt',
  translation: 'юбка',
  image: 'img/skirt.jpg',
  audioSrc: 'audio/skirt.mp3'
}, {
  word: 'pants',
  translation: 'брюки',
  image: 'img/pants.jpg',
  audioSrc: 'audio/pants.mp3'
}, {
  word: 'blouse',
  translation: 'блузка',
  image: 'img/blouse.jpg',
  audioSrc: 'audio/blouse.mp3'
}, {
  word: 'dress',
  translation: 'платье',
  image: 'img/dress.jpg',
  audioSrc: 'audio/dress.mp3'
}, {
  word: 'boot',
  translation: 'ботинок',
  image: 'img/boot.jpg',
  audioSrc: 'audio/boot.mp3'
}, {
  word: 'shirt',
  translation: 'рубашка',
  image: 'img/shirt.jpg',
  audioSrc: 'audio/shirt.mp3'
}, {
  word: 'coat',
  translation: 'пальто',
  image: 'img/coat.jpg',
  audioSrc: 'audio/coat.mp3'
}, {
  word: 'shoe',
  translation: 'туфли',
  image: 'img/shoe.jpg',
  audioSrc: 'audio/shoe.mp3'
}], //Clothes (set B)--NOT READY
[{
  word: 'slippers',
  translation: 'тапки',
  image: 'img/slippers.jpg',
  audioSrc: 'audio/slippers.mp3'
}, {
  word: 'mantle',
  translation: 'мантия',
  image: 'img/mantle.jpg',
  audioSrc: 'audio/mantle.mp3'
}, {
  word: 'jacket',
  translation: 'куртка',
  image: 'img/jacket.jpg',
  audioSrc: 'audio/jacket.mp3'
}, {
  word: 'tie',
  translation: 'галстук',
  image: 'img/tie.jpg',
  audioSrc: 'audio/tie.mp3'
}, {
  word: 'gloves',
  translation: 'перчатки',
  image: 'img/gloves.jpg',
  audioSrc: 'audio/gloves.mp3'
}, {
  word: 'sundress',
  translation: 'сарафан',
  image: 'img/sundress.jpg',
  audioSrc: 'audio/sundress.mp3'
}, {
  word: 'sandals',
  translation: 'босоножки',
  image: 'img/sandals.jpg',
  audioSrc: 'audio/sandals.mp3'
}, {
  word: 'vest',
  translation: 'жилет',
  image: 'img/vest.jpg',
  audioSrc: 'audio/vest.mp3'
}], //Emotions (set A)
[{
  word: 'sad',
  translation: 'грустный',
  image: 'img/sad.jpg',
  audioSrc: 'audio/sad.mp3'
}, {
  word: 'angry',
  translation: 'сердитый',
  image: 'img/angry.jpg',
  audioSrc: 'audio/angry.mp3'
}, {
  word: 'happy',
  translation: 'счастливый',
  image: 'img/happy.jpg',
  audioSrc: 'audio/happy.mp3'
}, {
  word: 'tired',
  translation: 'уставший',
  image: 'img/tired.jpg',
  audioSrc: 'audio/tired.mp3'
}, {
  word: 'surprised',
  translation: 'удивлённый',
  image: 'img/surprised.jpg',
  audioSrc: 'audio/surprised.mp3'
}, {
  word: 'scared',
  translation: 'испуганный',
  image: 'img/scared.jpg',
  audioSrc: 'audio/scared.mp3'
}, {
  word: 'smile',
  translation: 'улыбка',
  image: 'img/smile.jpg',
  audioSrc: 'audio/smile.mp3'
}, {
  word: 'laugh',
  translation: 'смех',
  image: 'img/laugh.jpg',
  audioSrc: 'audio/laugh.mp3'
}], //Emotions (set B)--NOT READY
[{
  word: 'shy',
  translation: 'застенчивый',
  image: 'img/shy.jpg',
  audioSrc: 'audio/shy.mp3'
}, {
  word: 'guilty',
  translation: 'виноватый',
  image: 'img/guilty.jpg',
  audioSrc: 'audio/guilty.mp3'
}, {
  word: 'lonely',
  translation: 'одинокий',
  image: 'img/lonely.jpg',
  audioSrc: 'audio/lonely.mp3'
}, {
  word: 'suspicious',
  translation: 'подозрительный',
  image: 'img/suspicious.jpg',
  audioSrc: 'audio/suspicious.mp3'
}, {
  word: 'gloomy',
  translation: 'xмурый',
  image: 'img/gloomy.jpg',
  audioSrc: 'audio/gloomy.mp3'
}, {
  word: 'proud',
  translation: 'гордый',
  image: 'img/proud.jpg',
  audioSrc: 'audio/proud.mp3'
}, {
  word: 'tense',
  translation: 'напряжённый',
  image: 'img/tense.jpg',
  audioSrc: 'audio/tense.mp3'
}, {
  word: 'cheerful',
  translation: 'бодрый',
  image: 'img/cheerful.jpg',
  audioSrc: 'audio/cheerful.mp3'
}]];

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! namespace exports */
/*! export game [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "game": () => /* binding */ game
/* harmony export */ });
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "./src/js/card.js");
/* harmony import */ var _createScale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createScale */ "./src/js/createScale.js");
/* harmony import */ var _createButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createButton */ "./src/js/createButton.js");
/* harmony import */ var _createArrayAudio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createArrayAudio */ "./src/js/createArrayAudio.js");
// import {input} from "./data";
var main = document.querySelector('#main');




function game(theme) {
  (0,_createScale__WEBPACK_IMPORTED_MODULE_1__.createScale)();
  (0,_createButton__WEBPACK_IMPORTED_MODULE_2__.createButtonStart)();
  var arrAudio = (0,_createArrayAudio__WEBPACK_IMPORTED_MODULE_3__.createArrayAudio)();
  var btn = document.querySelector('.btn-start');
  var numberOfword = 2;
  btn.addEventListener('click', function () {
    btn.innerText = 'Repeat';
    btn.classList.remove('btn-start');
    btn.classList.add('btn-repeat');
    var audioTest = new Audio("".concat(arrAudio[numberOfword]));
    audioTest.play();
    document.querySelector('.btn-repeat').addEventListener('click', function () {
      audioTest.play();
    });
  });

  for (var i = 0; i < 8; i++) {
    var card = new _card__WEBPACK_IMPORTED_MODULE_0__.Card(theme, i);
    main.className = 'play-main';
    card.createPlayCard(); //   card.addEventListener('click',function (){
    //     const star=document.createElement('img');
    //     star.className='star';
    //     star.src='./img/star-win.svg'
    //     if(card.numberOfword==numberOfword){
    //     card.style='opacity:0.5;';
    //     card.lastChild.firstChild.style='visibility:visible;';
    //     document.querySelector('#scale').prepend(star);
    //     card.style.pointerEvents = 'none';
    //     }
    //     else {
    //       star.src='./img/star.svg';
    //       document.querySelector('#scale').prepend(star);
    //     }
    //   });
    // }
  }
}

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ 	__webpack_require__("./src/style.scss");
/******/ })()
;
//# sourceMappingURL=script.js.map