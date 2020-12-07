import {input} from "./data";
export function createArrayAudio(theme){
let arr=[];
for(let i=0;i<8;i++){
  arr.push(`${input[theme][i].audioSrc}`);
}
return arr
}