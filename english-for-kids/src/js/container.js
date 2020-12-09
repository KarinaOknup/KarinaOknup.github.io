import {Card} from "./card";
import {MODES} from "./MODES";
import {Game} from "./game";
const main=document.querySelector('#main');
const pageContainer=document.querySelector('#pageContainer');
export class Container{
  constructor(mode) {
    this.mode=mode;
    this.mistakes=0;
  }
  createContainerGame(theme){
    let game = new Game(theme);
    switch(this.mode){
      case MODES.train :
        for(let i = 0 ; i < 8 ; i++){
          let card = new Card(theme,i);
          card.createTrainCard();
        }
      break;
      case MODES.play :
        game.createGame();
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
    pageContainer.style='pointer-events: auto';
  }
}