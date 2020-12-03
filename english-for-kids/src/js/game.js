import {input} from "./data";
export function game(){
      //OnClick-draft for game. Now play-cards always act like correct answer
    //i want to do results when number of childs in scale  will be 8
  document.querySelectorAll('.card').forEach(e => {
      e.addEventListener('click', function() {
      e.style='opacity:0.5;';
      e.lastChild.firstChild.style='visibility:visible;';
      const star=document.createElement('img');
      star.className='star';
      star.src='./img/star-win.svg'
      document.querySelector('#scale').prepend(star);
      e.style.pointerEvents = 'none';
      });
    });
  let btn=document.querySelector('.btn-start');
  btn.addEventListener('click',function(){
  btn.innerText='Repeat';
  btn.classList.remove('btn-start');
  btn.classList.add('btn-repeat');
  let audioTest = new Audio(`${input[1][5].audioSrc}`);
  audioTest.play();
  document.querySelector('.btn-repeat').addEventListener('click',function(){
  audioTest.play();
})
});
}