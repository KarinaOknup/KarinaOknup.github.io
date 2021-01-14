async function getData(){
  const responce = await fetch('../assets/data_pets.json');
  const json = await responce.json();
  return json;
}
async function handle() {
  const pets = await getData();
  console.log(pets)
  for(let i = 0; i < 3; i++){
  let slides = document.createElement('div');
  slides.class = 'slide-items';
  slides.innerHTML=`<img  class="pet-img" src="${pets[i].img}" alt="">
  <p class="pet-name">${pets[i].name}</p>
  <button class="btn btn-secondary">Learn more</button>`;
  document.querySelector('.slide-cards').appendChild(slides);
  }
}
async function slider(){
 await handle();
 new Swiper('.slide');
}
slider()