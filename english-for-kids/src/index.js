import {MODES} from "./js/MODES";
import {Container} from "./js/container"
//guess this import is too big, but dont know now how to
//do it smaller(i use it for my cards only)
import 'bootstrap';
//i left this modules for future, if they wouldn't help me, i will delete them
import {input} from "./js/data";
import {Card} from "./js/card"

// DONT FORGET
// в футере приложения есть ссылка на гитхаб автора,
// год создания приложения, логотип курса со
//ссылкой на курс
//
//ссылка на текущую страницу внешне отличается от остальных
//
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
let list = document.querySelectorAll('.menu-a');
for (let i = 0, len = list.length; i < len; i++) {
  list[i].addEventListener('click', function(){
    numberOfTheme = list[i].id;
    page.clearContainer();
    if (numberOfTheme==0) page.createMainPage();
    else  page.createContainerGame(numberOfTheme);
    for (let i = 0, len = list.length; i < len; i++) {
      list[i].classList.remove('mainPage')
    }
    list[i].classList.toggle('mainPage');
  })
}//i don't know how to do moving by main-page cards,
// tried to do 'a' from cards, but it didn't help me

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