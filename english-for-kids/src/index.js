// const mainPage = document.querySelector('#main');//Main Page
// const categoryPage = document.querySelector('#category');// Category Page

// const categoriesList = document.querySelector('#categoriesList')
// const wordsList = document.querySelector('#wordsList')



// // remove templates from DOM

// const container = document.querySelector('#container');//page container
// container.append(mainPage);

// const cardList = new CardList();
// document.querySelector('#switch').addEventListener('click',(event) => {
//   cardList.changeMode(MODES.play);
// });

// class CardList {
//   constructor(state) { // [{}, {}, ...{}]
//     this.state = state;
//     this.list = document.createElement();

//     this.state .forEach(singleState => {
//         const card = new Card(singleState);
//         this.wordsList.append(card.createElement);
//     });

//     this.cards =this.state.map(singleState => {
//       const card = new Card(singleState);
      
//       this.wordsList.append(card.createElement);

//       return card;
//     });

//   }

//   changeMode(mode){
//     this.cards.forEach(card => card.changeMode(mode))
//   }

// }

// class Card {
//       constructor(state) {
//         this.state = state;
//         this.mode=MODES.play;

//       }
//       createCard(){
//         const cardElement = document.createElement('div');
//         cardElement.innerHTML(`<div>hey</div>`);

//         return cardElement;
//       }

//       setMode(mode){
//         this.mode = mode;
//       }
// }
import {MODES} from "./js/MODES";
import {input}  from "./js/data";
import 'bootstrap';
//create card//
for(let i = 0 ; i < 8 ; i++){
const card = document.createElement('div');
card.innerHTML=`
<div class="card" style="width: 18rem;">
  <div class="front">
    <img src="${input[1][i].image}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${input[1][i].word}</p>
    </div>
  </div>
  <div class="back">
    <img src="${input[1][i].image}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${input[1][i].translation}</p>
    </div>
  </div>
</div>`
document.querySelector('.main').appendChild(card);
}

for (var i = 0; i < document.querySelectorAll('.card').length; i++) {
  (function(e){
    document.querySelectorAll('.card')[e].addEventListener('click', function() {
      this.classList.toggle('flipped');
    })

  }(i))
}