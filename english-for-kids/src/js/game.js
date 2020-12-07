// import {input} from "./data";
const main=document.querySelector('#main');
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
    console.log(this.iR);
    createScale();
    createButtonStart();
    let iRC=this.iR;
    let rN=this.randomNumbers;
    let arrA=this.arrAudio;
    let btn=document.querySelector('.btn-start');
    btn.addEventListener('click',function(){
      btn.innerText='Repeat';
      btn.classList.remove('btn-start');
      btn.classList.add('btn-repeat');
      let audioTest = new Audio(`${arrA[rN[iRC]]}`);
      audioTest.play();
      document.querySelector('.btn-repeat').addEventListener('click',function(){
    audioTest.play();
    })
    });
    for(let i = 0 ; i < 8 ; i++){
      let card = new Card(this.theme,i);
      main.className='play-main';
      card.createPlayCard(this.randomNumbers[this.iR]);
    }
  }
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}