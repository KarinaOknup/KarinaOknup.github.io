import {MODES} from "./js/MODES";
import {input}  from "./js/data";
import 'bootstrap';

const mainPage = document.querySelector('#main');//Main Page
const pageContainer=document.querySelector('#pageContainer');
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

//MENU-NAV//
var checkbox = document.querySelector( '#myInput' );
var icon = document.querySelector( '#menuToggle span' );
var listener = function( e ) {
  if( e.target != checkbox && e.target != icon ) {
    checkbox.checked = false;
    document.removeEventListener( 'click', listener );
  }
};
checkbox.addEventListener( 'click', function(){
  if( this.checked ) {
    document.addEventListener( 'click', listener );
  }
});

//CLEAR CONTAINER//
function clearContainer()
{
  while(pageContainer.firstChild)pageContainer.removeChild(pageContainer.firstChild);
}

//CARD//
class Card {
      constructor(theme,numberOfword) {
        this.mode=MODES.play;
        this.theme=theme;
        this.numberOfword=numberOfword;
      }
      //create card//
      createTrainCard(){
        const card = document.createElement('div');
        card.className='card';
        const front=document.createElement('div');
        front.className='front';
        front.innerHTML=`
          <img src="${input[this.theme][this.numberOfword].image}" class="card-img-top" alt="...">
          <div class="card-body">
          <p class="card-text">${input[this.theme][this.numberOfword].word}</p>
          </div>
          `
        card.appendChild(front);
        const back=document.createElement('div');
        back.className='back';
        back.innerHTML=`
          <img src="${input[this.theme][this.numberOfword].image}" class="card-img-top" alt="...">
          <div class="card-body">
          <p class="card-text">${input[this.theme][this.numberOfword].translation}</p>
          </div>
          `
        card.appendChild(back);
        pageContainer.appendChild(card);
        //FLIP//
        card.addEventListener('click', function() {
        card.classList.toggle('flipped');
        });
        card.addEventListener("mouseleave", function() {
        card.classList.remove('flipped');
         });
      }
      createPlayCard(){
        const card = document.createElement('div');
        card.className='card';
        card.style='background:rgb(148, 66, 195)';

        const img=document.createElement('img');
        img.src=`${input[this.theme][this.numberOfword].image}`;
        img.className='card-img-top';
        img.alt=`${input[this.theme][this.numberOfword].word}`;
        card.appendChild(img);

        const cardBody=document.createElement('div')
        cardBody.className='card-body';
        const text=document.createElement('p');

        text.className='card-text play-text';
        text.innerHTML=`${input[this.theme][this.numberOfword].translation}`;
        cardBody.appendChild(text);
        card.appendChild(cardBody);

        pageContainer.appendChild(card);
        //OnClick-draft for game//
        card.addEventListener('click', function() {
          card.style='opacity:0.5;';
          text.style='visibility:visible;';
          });
      }
      setMode(mode){
        this.mode = mode;
      }
}
//CREATE ELEMENT//
for(let i = 0 ; i < 8 ; i++){
let card = new Card(3,i);
switch(card.mode){
  case 'train' :
  card.createTrainCard();

  break;
  case 'play' :
  card.createPlayCard();
  break;
}
}



