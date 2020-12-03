import {Card} from "./card"
import {MODES} from "./MODES";
import {createScale} from "./createScale";
import {createButtonStart} from "./createButton";
import { game } from "./game";
const main=document.querySelector('#main');
const pageContainer=document.querySelector('#pageContainer');
export class Container{
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
        createButtonStart();
        for(let i = 0 ; i < 8 ; i++){
          let card = new Card(theme,i);
          main.className='play-main';
          card.createPlayCard();
        };
        game();
      break;
    }
  }
  createMainPage(){
    for(let i = 1 ; i < 9 ; i++){
      let card = new Card(0,i);
      card.createMainPageCard();
      }
  }
  clearContainer() {
    while(pageContainer.firstChild){
      pageContainer.removeChild(pageContainer.firstChild);
    }
    if (main.classList.contains('play-main')){
      main.classList.remove('play-main')
      main.removeChild(document.querySelector('#scale'));
      main.removeChild(document.querySelector('.btn'));
    }
  }
}