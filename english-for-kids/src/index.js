import {MODES} from "./js/MODES";
import {Container} from "./js/container"
//i left this modules for future, if they wouldn't help me, i will delete them
import {input} from "./js/data";
import {Card} from "./js/card"

// DONT FORGET
// в футере приложения есть ссылка на гитхаб автора,
// год создания приложения, логотип курса со
//ссылкой на курс

const page = new Container(MODES.train);
page.createMainPage();
let numberOfTheme=0;
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
//---------Menu(moving)-------------//
function locationHashChanged() {
  page.clearContainer();
  switch (location.hash){
    case'#mainPage':
    page.createMainPage();
    numberOfTheme=0;
    break;
    case'#action(setA)':
    page.createContainerGame(1);
    numberOfTheme=1;
    break;
    case'#action(setB)':
    page.createContainerGame(2);
    numberOfTheme=2;
    break;
    case'#animal(setA)':
    page.createContainerGame(3);
    numberOfTheme=3;
    break;
    case'#animal(setB)':
    page.createContainerGame(4);
    numberOfTheme=4;
    break;
    case'#clothes(setA)':
    page.createContainerGame(5);
    numberOfTheme=5;
    break;
    case'#clothes(setB)':
    page.createContainerGame(6);
    numberOfTheme=6;
    break;
    case'#emotions(setA)':
    page.createContainerGame(7);
    numberOfTheme=7;
    break;
    case'#emotions(setB)':
    page.createContainerGame(8);
    numberOfTheme=8;
    break;
  }
  document.querySelectorAll('a').forEach(e=>{e.classList.remove('currentPage')});
  document.getElementById(`${numberOfTheme}`).classList.add('currentPage');
}
window.onhashchange = locationHashChanged;
//SWITCHER//
const switcher=document.querySelector('.switcher');
switcher.addEventListener('click',function(){
  switcher.classList.toggle('active');
  Array.from(document.querySelectorAll('.switcher-label')).forEach(element=>element.classList.toggle('mode'))
  page.clearContainer();
  document.querySelector('.header').classList.toggle('game-header');
//switch main function//
  page.mode==MODES.train ? page.mode=MODES.play : page.mode=MODES.train;
  if(numberOfTheme != 0) page.createContainerGame(numberOfTheme);
  else page.createMainPage();
  });

