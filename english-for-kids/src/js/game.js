// import {input} from "./data";
const main=document.querySelector('#main');
const pageContainer=document.querySelector('#pageContainer');

import {Card} from "./card";
import {createScale} from "./createScale";
import {createButtonStart} from "./createButton";
import {createArrayAudio} from "./createArrayAudio";
export class Game{
  constructor(theme){
  this.theme=theme;
  this.randomNumbers=[0,1,2,3,4,5,6,7];
  this.iR = getRandomInt(this.randomNumbers.length);
  this.arrAudio=createArrayAudio(theme);
  }
  createGame(){
    createScale();
    createButtonStart();
    let correct = new Audio('audio/correct.mp3');
    let wrong = new Audio('audio/wrong.mp3')
    let iRC=this.iR;
    let rN=this.randomNumbers;
    let arrA=this.arrAudio;
    let audioTest = new Audio(`${arrA[rN[iRC]]}`);
    let btn=document.querySelector('.btn-start');
    pageContainer.style='pointer-events: none';
    btn.addEventListener('click',function(){
      btn.innerText='Repeat';
      btn.classList.remove('btn-start');
      btn.classList.add('btn-repeat');
      pageContainer.style='pointer-events: auto'
      audioTest.play();
      document.querySelector('.btn-repeat').addEventListener('click',function(){
    audioTest.play();
    })
    });
    for(let i = 0 ; i < 8 ; i++){
      let card = new Card(this.theme,i);
      main.className='play-main';
      card.createPlayCard(i);
    }
      const star = document.createElement('img');
      star.className ='star';
      document.querySelectorAll('.card').forEach((e)=>{
      e.addEventListener('click',function(){
      if(e.id==rN[iRC]){
          rN.splice(iRC,1);
          iRC=getRandomInt(rN.length);
          audioTest=new Audio(`${arrA[rN[iRC]]}`);
          audioTest.play();
          correct.play();
          const star = document.createElement('img');
          star.className ='star win';
          star.src ='./img/star-win.svg';
          e.style = 'opacity:0.5;';
          e.lastChild.firstChild.style = 'visibility:visible;';
          document.querySelector('#scale').prepend(star);
          e.style.pointerEvents = 'none';
          document.querySelector('#scale').prepend(star);
        }
        else {
          wrong.play();
          document.querySelector('#pageContainer').classList.add('fail');
          const star = document.createElement('img');
          star.className ='star wrong';
          star.src='./img/star.svg';
          star.className='star wrong';
          document.querySelector('#scale').prepend(star);
        }
    })
    })
}
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

