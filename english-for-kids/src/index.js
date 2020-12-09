import {MODES} from "./js/MODES";
import {Container} from "./js/container";

window.mistakes=0;
const page = new Container(MODES.train);
const pageContainer=document.querySelector('#pageContainer');
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
    default:
    page.createMainPage();
    numberOfTheme=0;
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

    document.body.addEventListener('click',function(){
      if(document.querySelectorAll('.star').length >= 10) document.querySelectorAll('.wrong').forEach(e=>e.remove());
      if(document.querySelectorAll('.win').length==8){
        if(document.querySelector('#pageContainer').classList.contains('fail')){
          let failure= new Audio('./audio/failure.mp3')
          failure.play();
          page.clearContainer();
          const div = document.createElement('div')
          div.className='div-message';
          const img = document.createElement('img');
          img.src = './img/failure.jpg';
          const message = document.createElement('div');
          message.className = 'message';
          message.innerHTML = `Now your result: ${window.mistakes} mistakes. Let's try again!`;
          div.appendChild(img);
          div.appendChild(message);
          pageContainer.appendChild(div);
          setTimeout(function(){
            page.clearContainer();
            numberOfTheme = 0;
            document.querySelector('#pageContainer').classList.remove('fail')
            location.hash='#mainPage';
          },3000)
        }
        else {
        let success= new Audio('./audio/success.mp3')
        success.play();
        page.clearContainer();
        const div = document.createElement('div')
        div.className='div-message';
        const img=document.createElement('img');
        img.src='./img/success.jpg';
        const message=document.createElement('div');
        message.className='message';
        message.innerHTML=`It's so cool. Now try to solve new theme!`;
        div.appendChild(img);
        div.appendChild(message);
        pageContainer.appendChild(div);
        setTimeout(function(){
          page.clearContainer();
          numberOfTheme=0;
          location.hash='#mainPage';

        },3000)
          }
        }
    })
