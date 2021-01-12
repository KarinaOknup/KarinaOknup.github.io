console.log('arrPets');
document.getElementsByClassName('slide-items').forEach(e=>{
  e.addEventListener('click',popUp())
})
function popUp(){
  console.log('arrPets');
  let popBox=document.createElement('div');
  popBox.className('popBox');
  popBox.addEventListener('click',function(){alert('smile')});
  document.querySelector('body').appendChild(popBox);
}