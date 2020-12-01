import {MODES} from "./js/MODES";
import {input}  from "./js/data";
import 'bootstrap';

const main = document.querySelector('#main');//Main Page
const pageContainer=document.querySelector('#pageContainer');

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

//CARD//
class Card {
      constructor(theme,numberOfword) {
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
          const star=document.createElement('img');
          star.className='star';
          star.src='./img/star-win.svg'
          document.querySelector('#scale').prepend(star);
          });
      }
      createMainPageCard(){
        const card = document.createElement('div');
        card.className='card';
        card.style='background:rgb(148, 66, 195)';
        //---------------///
        const img=document.createElement('img');
        img.src=`${input[this.numberOfword][0].image}`;
        img.className='card-img-top';
        img.alt=`${input[0][this.numberOfword]}`;
        card.appendChild(img);
        //---------------///
        const cardBody=document.createElement('div')
        cardBody.className='card-body';
        const text=document.createElement('p');
        //---------------///
        text.className='card-text';
        text.innerHTML=`${input[0][this.numberOfword-1]}`;
        cardBody.appendChild(text);
        card.appendChild(cardBody);
        //---------------///
        pageContainer.appendChild(card);
      }
}
//CONTAINER//
class Container{
  constructor(mode) {
    this.mode=mode;
  }
  createContainerGame(theme){
    switch(this.mode){
      case MODES.train :
        for(let i = 0 ; i < 8 ; i++){
          let card = new Card(theme,i);
          card.createTrainCard();
        }
      break;
      case MODES.play :
        createScale();
        for(let i = 0 ; i < 8 ; i++){
          let card = new Card(theme,i);
          card.createPlayCard();
        }
      break;
    }
  }
  createMainPage(theme){
    for(let i = 1 ; i < 9 ; i++){
      let card = new Card(theme,i);
      card.createMainPageCard();
      }
  }
  clearContainer() {
    while(pageContainer.firstChild){
      pageContainer.removeChild(pageContainer.firstChild);
    }
    if (this.mode==MODES.play) main.removeChild(document.querySelector('#scale'));
  }
}
//SCALE//
//   isUncorrect(){
//     const star=document.createElement('div');
//     star.className='empty-star';
//     document.querySelector('#scale').prepend(star);
//   }
function createScale(){
  const scale = document.createElement('div');
  scale.id='scale';
  main.prepend(scale);
}

const page = new Container(MODES.train);
page.createMainPage(6);
//SWITCHER//
const switcher=document.querySelector('.switcher');
switcher.addEventListener('click',function(){
  switcher.classList.toggle('active');
  Array.from(document.querySelectorAll('.switcher-label')).forEach(element=>element.classList.toggle('mode'))
  page.clearContainer();
  page.mode==MODES.train ? page.mode=MODES.play : page.mode=MODES.train;
  page.createContainerGame(6);
  });



//CREATE MAIN PAGE//



