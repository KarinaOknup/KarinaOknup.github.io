// import {input} from "./data";
const main=document.querySelector('#main');
import {Card} from "./card";
import {createScale} from "./createScale";
import {createButtonStart} from "./createButton";
import {createArrayAudio} from "./createArrayAudio";
export function game(theme){
    createScale();
    createButtonStart();
    let arrAudio=createArrayAudio();
    let btn=document.querySelector('.btn-start');
    let numberOfword=2;
    btn.addEventListener('click',function(){
    btn.innerText='Repeat';
    btn.classList.remove('btn-start');
    btn.classList.add('btn-repeat');
    let audioTest = new Audio(`${arrAudio[numberOfword]}`);
    audioTest.play();
    document.querySelector('.btn-repeat').addEventListener('click',function(){
    audioTest.play();
    })
    });
    for(let i = 0 ; i < 8 ; i++){
    let card = new Card(theme,i);
    main.className='play-main';
    card.createPlayCard();
  //   card.addEventListener('click',function (){
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
