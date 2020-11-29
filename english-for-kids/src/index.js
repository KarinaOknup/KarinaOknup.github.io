import {MODES} from "./js/MODES";
import {input}  from "./js/data";
import 'bootstrap';

const main = document.querySelector('#main');//Main Page
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
        card.className = 'card';
        //FRONT//
        const front = document.createElement('div');
        front.className = 'front';
        //---------------///
        const imgF = document.createElement('img');
        imgF.src = `${input[this.theme][this.numberOfword].image}`;
        imgF.className ='card-img-top';
        imgF.alt = `${input[this.theme][this.numberOfword].word}`;
        front.appendChild(imgF);
        //---------------///
        const cardBody = document.createElement('div')
        cardBody.className = 'card-body';
        //---------------///
        const text = document.createElement('p');
        text.className = 'card-text';
        text.innerHTML = `${input[this.theme][this.numberOfword].word}`;
        cardBody.appendChild(text);
        front.appendChild(cardBody);
        card.appendChild(front);
        //BACK//
        const back = document.createElement('div');
        back.className = 'back';
        //---------------///
        const imgB = document.createElement('img');
        imgB.src = `${input[this.theme][this.numberOfword].image}`;
        imgB.className ='card-img-top';
        imgB.alt = `${input[this.theme][this.numberOfword].translation}`;
        back.appendChild(imgB);
        //---------------///
        const cardBodyB = document.createElement('div')
        cardBodyB.className = 'card-body';
        //---------------///
        const textB = document.createElement('p');
        textB.className = 'card-text';
        textB.innerHTML = `${input[this.theme][this.numberOfword].translation}`;
        cardBodyB.appendChild(textB);
        back.appendChild(cardBodyB);
        card.appendChild(back);
        //---------------///
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
        //---------------///
        const img=document.createElement('img');
        img.src=`${input[this.theme][this.numberOfword].image}`;
        img.className='card-img-top';
        img.alt=`${input[this.theme][this.numberOfword].word}`;
        card.appendChild(img);
        //---------------///
        const cardBody=document.createElement('div')
        cardBody.className='card-body';
        const text=document.createElement('p');
        //---------------///
        text.className='card-text play-text';
        text.innerHTML=`${input[this.theme][this.numberOfword].translation}`;
        cardBody.appendChild(text);
        card.appendChild(cardBody);
        //---------------///
        pageContainer.appendChild(card);
        //OnClick-draft for game//
        card.addEventListener('click', function() {
          card.style='opacity:0.5;';
          text.style='visibility:visible;';
          star.isCorrect();
          });
      }
      setMode(mode){
        this.mode = mode;
      }
};
//SCALE//
let star = {
  stars:0,
  createScale(){
  const scale = document.createElement('div');
  scale.id='scale';
  main.prepend(scale);
  },
  isCorrect(){
  const star=document.createElement('div');
  star.className='star';
  document.querySelector('#scale').prepend(star);
  this.stars++
  },
  isUncorrect(){
    const star=document.createElement('div');
    star.className='empty-star';
    document.querySelector('#scale').prepend(star);
    }
  }

//CREATE ELEMENT//
// switch(card.mode){
switch('play'){
  case 'train' :
  for(let i = 0 ; i < 8 ; i++){
  let card = new Card(3,i);
  card.createTrainCard();
  }
  break;
  case 'play' :
  star.createScale();
  for(let i = 0 ; i < 8 ; i++){
      let card = new Card(3,i);
      card.createPlayCard();
  }
  break;
}




