import {input} from "./data";
const pageContainer=document.querySelector('#pageContainer');
export class Card {
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
    card.style='background-image: linear-gradient(to top, #c471f5 0%, #fa71cd 100%);';
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
    //OnClick-draft for game. Now play-cards always act like correct answer
    //i want to do results when number of childs in scale  will be 8
    card.addEventListener('click', function() {
      card.style='opacity:0.5;';
      text.style='visibility:visible;';
      const star=document.createElement('img');
      star.className='star';
      star.src='./img/star-win.svg'
      document.querySelector('#scale').prepend(star);
      card.style.pointerEvents = 'none';
      });
  }
  createMainPageCard(){
    const card = document.createElement('div');
    card.className='card main-card';
    card.style='background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);'
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