let slides = [
  {
    id:0,
    name:"Deer",
    description:"Naturalist investigation",
    img:'./assets/slides/deer.jpg',
  },
  {
    id:1,
    name:"Squirrel",
    description:"Kamikaze squirrels",
    img:'./assets/slides/squirrel.jpg',
  },
  {
    id:2,
    name:"Bird",
    description:"Birds Fight club",
    img:'./assets/slides/bird.jpg',
  }
];
let slideBox = document.getElementsByClassName('swiper-wrapper');
slides.forEach(e => {
  let slide = document.createElement('div');
  slide.className = 'swiper-slide';
  slide.style = `background-image:url('${e.img}')`;
  slide.innerHTML = `<h4>${e.name}</h4><span>${e.description}</span>`;
  slideBox[0].append(slide);
})

