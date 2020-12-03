import {input} from "./data";
const main=document.querySelector('#main');
export function createScale(){
  const scale = document.createElement('div');
  scale.id='scale';
  main.prepend(scale);
}
