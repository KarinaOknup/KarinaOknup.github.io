(()=>{"use strict";(()=>{var e="train",a="play",i=[["Action (set A)","Action (set B)","Animal (set A)","Animal (set B)","Clothes (set A)","Clothes (set B)","Emotions (set A)","Emotions (set B)"],[{word:"cry",translation:"плакать",image:"img/cry.jpg",audioSrc:"audio/cry.mp3"},{word:"dance",translation:"танцевать",image:"img/dance.jpg",audioSrc:"audio/dance.mp3"},{word:"dive",translation:"нырять",image:"img/dive.jpg",audioSrc:"audio/dive.mp3"},{word:"draw",translation:"рисовать",image:"img/draw.jpg",audioSrc:"audio/draw.mp3"},{word:"fish",translation:"ловить рыбу",image:"img/fish.jpg",audioSrc:"audio/fish.mp3"},{word:"fly",translation:"летать",image:"img/fly.jpg",audioSrc:"audio/fly.mp3"},{word:"hug",translation:"обнимать",image:"img/hug.jpg",audioSrc:"audio/hug.mp3"},{word:"jump",translation:"прыгать",image:"img/jump.jpg",audioSrc:"audio/jump.mp3"}],[{word:"open",translation:"открывать",image:"img/open.jpg",audioSrc:"audio/open.mp3"},{word:"play",translation:"играть",image:"img/play.jpg",audioSrc:"audio/play.mp3"},{word:"point",translation:"указывать",image:"img/point.jpg",audioSrc:"audio/point.mp3"},{word:"ride",translation:"ездить",image:"img/ride.jpg",audioSrc:"audio/ride.mp3"},{word:"run",translation:"бегать",image:"img/run.jpg",audioSrc:"audio/run.mp3"},{word:"sing",translation:"петь",image:"img/sing.jpg",audioSrc:"audio/sing.mp3"},{word:"skip",translation:"прыгать",image:"img/skip.jpg",audioSrc:"audio/skip.mp3"},{word:"swim",translation:"плавать",image:"img/swim.jpg",audioSrc:"audio/swim.mp3"}],[{word:"cat",translation:"кот",image:"img/cat.jpg",audioSrc:"audio/cat.mp3"},{word:"chick",translation:"цыплёнок",image:"img/chick.jpg",audioSrc:"audio/chick.mp3"},{word:"chicken",translation:"курица",image:"img/chicken.jpg",audioSrc:"audio/chicken.mp3"},{word:"dog",translation:"собака",image:"img/dog.jpg",audioSrc:"audio/dog.mp3"},{word:"horse",translation:"лошадь",image:"img/horse.jpg",audioSrc:"audio/horse.mp3"},{word:"pig",translation:"свинья",image:"img/pig.jpg",audioSrc:"audio/pig.mp3"},{word:"rabbit",translation:"кролик",image:"img/rabbit.jpg",audioSrc:"audio/rabbit.mp3"},{word:"sheep",translation:"овца",image:"img/sheep.jpg",audioSrc:"audio/sheep.mp3"}],[{word:"bird",translation:"птица",image:"img/bird.jpg",audioSrc:"audio/bird.mp3"},{word:"fish",translation:"рыба",image:"img/fish1.jpg",audioSrc:"audio/fish.mp3"},{word:"frog",translation:"жаба",image:"img/frog.jpg",audioSrc:"audio/frog.mp3"},{word:"giraffe",translation:"жирафа",image:"img/giraffe.jpg",audioSrc:"audio/giraffe.mp3"},{word:"lion",translation:"лев",image:"img/lion.jpg",audioSrc:"audio/lion.mp3"},{word:"mouse",translation:"мышь",image:"img/mouse.jpg",audioSrc:"audio/mouse.mp3"},{word:"turtle",translation:"черепаха",image:"img/turtle.jpg",audioSrc:"audio/turtle.mp3"},{word:"dolphin",translation:"дельфин",image:"img/dolphin.jpg",audioSrc:"audio/dolphin.mp3"}],[{word:"skirt",translation:"юбка",image:"img/skirt.jpg",audioSrc:"audio/skirt.mp3"},{word:"pants",translation:"брюки",image:"img/pants.jpg",audioSrc:"audio/pants.mp3"},{word:"blouse",translation:"блузка",image:"img/blouse.jpg",audioSrc:"audio/blouse.mp3"},{word:"dress",translation:"платье",image:"img/dress.jpg",audioSrc:"audio/dress.mp3"},{word:"boot",translation:"ботинок",image:"img/boot.jpg",audioSrc:"audio/boot.mp3"},{word:"shirt",translation:"рубашка",image:"img/shirt.jpg",audioSrc:"audio/shirt.mp3"},{word:"coat",translation:"пальто",image:"img/coat.jpg",audioSrc:"audio/coat.mp3"},{word:"shoe",translation:"туфли",image:"img/shoe.jpg",audioSrc:"audio/shoe.mp3"}],[{word:"slippers",translation:"тапки",image:"img/slippers.jpg",audioSrc:"audio/slippers.mp3"},{word:"mantle",translation:"мантия",image:"img/mantle.jpg",audioSrc:"audio/mantle.mp3"},{word:"jacket",translation:"куртка",image:"img/jacket.jpg",audioSrc:"audio/jacket.mp3"},{word:"tie",translation:"галстук",image:"img/tie.jpg",audioSrc:"audio/tie.mp3"},{word:"gloves",translation:"перчатки",image:"img/gloves.jpg",audioSrc:"audio/gloves.mp3"},{word:"sundress",translation:"сарафан",image:"img/sundress.jpg",audioSrc:"audio/sundress.mp3"},{word:"sandals",translation:"босоножки",image:"img/sandals.jpg",audioSrc:"audio/sandals.mp3"},{word:"vest",translation:"жилет",image:"img/vest.jpg",audioSrc:"audio/vest.mp3"}],[{word:"sad",translation:"грустный",image:"img/sad.jpg",audioSrc:"audio/sad.mp3"},{word:"angry",translation:"сердитый",image:"img/angry.jpg",audioSrc:"audio/angry.mp3"},{word:"happy",translation:"счастливый",image:"img/happy.jpg",audioSrc:"audio/happy.mp3"},{word:"tired",translation:"уставший",image:"img/tired.jpg",audioSrc:"audio/tired.mp3"},{word:"surprised",translation:"удивлённый",image:"img/surprised.jpg",audioSrc:"audio/surprised.mp3"},{word:"scared",translation:"испуганный",image:"img/scared.jpg",audioSrc:"audio/scared.mp3"},{word:"smile",translation:"улыбка",image:"img/smile.jpg",audioSrc:"audio/smile.mp3"},{word:"laugh",translation:"смех",image:"img/laugh.jpg",audioSrc:"audio/laugh.mp3"}],[{word:"shy",translation:"застенчивый",image:"img/shy.jpg",audioSrc:"audio/shy.mp3"},{word:"guilty",translation:"виноватый",image:"img/guilty.jpg",audioSrc:"audio/guilty.mp3"},{word:"lonely",translation:"одинокий",image:"img/lonely.jpg",audioSrc:"audio/lonely.mp3"},{word:"suspicious",translation:"подозрительный",image:"img/suspicious.jpg",audioSrc:"audio/suspicious.mp3"},{word:"gloomy",translation:"xмурый",image:"img/gloomy.jpg",audioSrc:"audio/gloomy.mp3"},{word:"proud",translation:"гордый",image:"img/proud.jpg",audioSrc:"audio/proud.mp3"},{word:"tense",translation:"напряжённый",image:"img/tense.jpg",audioSrc:"audio/tense.mp3"},{word:"cheerful",translation:"бодрый",image:"img/cheerful.jpg",audioSrc:"audio/cheerful.mp3"}]];function t(e,a){for(var i=0;i<a.length;i++){var t=a[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var r=document.querySelector("#pageContainer"),o=function(){function e(a,i){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,e),this.theme=a,this.numberOfword=i}var a,o;return a=e,(o=[{key:"createTrainCard",value:function(){var e=document.createElement("div");e.className="card";var a=document.createElement("div");a.className="front";var t=document.createElement("img");t.src="img/rotate.svg",t.className="img-flip",a.appendChild(t);var o=document.createElement("img");o.src="".concat(i[this.theme][this.numberOfword].image),o.className="card-img-top",o.alt="".concat(i[this.theme][this.numberOfword].word),a.appendChild(o);var n=document.createElement("div");n.className="card-body";var c=document.createElement("p");c.className="card-text",c.innerHTML="".concat(i[this.theme][this.numberOfword].word),n.appendChild(c),a.appendChild(n),e.appendChild(a);var d=document.createElement("div");d.className="back";var s=document.createElement("img");s.src="".concat(i[this.theme][this.numberOfword].image),s.className="card-img-top",s.alt="".concat(i[this.theme][this.numberOfword].translation),d.appendChild(s);var m=document.createElement("div");m.className="card-body";var l=document.createElement("p");l.className="card-text",l.innerHTML="".concat(i[this.theme][this.numberOfword].translation),m.appendChild(l),d.appendChild(m),e.appendChild(d),r.appendChild(e);var u=new Audio("".concat(i[this.theme][this.numberOfword].audioSrc));t.addEventListener("click",(function(){e.classList.toggle("flipped")})),e.addEventListener("click",(function(){u.play()})),e.addEventListener("mouseleave",(function(){e.classList.remove("flipped")}))}},{key:"createPlayCard",value:function(e){var a=document.createElement("div");a.className="card card-play",a.style="background-image: linear-gradient(to top, #c471f5 0%, #fa71cd 100%);";var t=document.createElement("img");t.src="".concat(i[this.theme][this.numberOfword].image),t.className="card-img-top",t.alt="".concat(i[this.theme][this.numberOfword].word),a.appendChild(t);var o=document.createElement("div");o.className="card-body";var n=document.createElement("p");n.className="card-text play-text",n.innerHTML="".concat(i[this.theme][this.numberOfword].translation),o.appendChild(n),a.appendChild(o),a.id=e,r.appendChild(a)}},{key:"createMainPageCard",value:function(){var e=document.createElement("div");e.className="card main-card",e.style="background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);";var a=document.createElement("img");a.src="".concat(i[this.numberOfword][0].image),a.className="card-img-top",a.alt="".concat(i[0][this.numberOfword]),e.appendChild(a);var t=document.createElement("div");t.className="card-body";var o=document.createElement("p");o.className="card-text",o.innerHTML="".concat(i[0][this.numberOfword-1]),t.appendChild(o),e.appendChild(t);var n=document.createElement("a");switch(n.className="a-card",this.numberOfword-1){case 0:n.href="#action(setA)";break;case 1:n.href="#action(setB)";break;case 2:n.href="#animal(setA)";break;case 3:n.href="#animal(setB)";break;case 4:n.href="#clothes(setA)";break;case 5:n.href="#clothes(setB)";break;case 6:n.href="#emotions(setA)";break;case 7:n.href="#emotions(setB)"}n.appendChild(e),r.appendChild(n)}}])&&t(a.prototype,o),e}(),n=document.querySelector("#main"),c=document.querySelector("#main");function d(e,a){for(var i=0;i<a.length;i++){var t=a[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var s=document.querySelector("#main"),m=document.querySelector("#pageContainer"),l=function(){function e(a){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,e),this.theme=a,this.randomNumbers=[0,1,2,3,4,5,6,7],this.iR=u(this.randomNumbers.length),this.arrAudio=function(e){for(var a=[],t=0;t<8;t++)a.push("".concat(i[e][t].audioSrc));return a}(a)}var a,t;return a=e,(t=[{key:"createGame",value:function(){var e;(e=document.createElement("div")).id="scale",n.prepend(e),function(){var e=document.createElement("button");e.className="btn btn-start",e.innerText="Start game",c.prepend(e)}();var a=new Audio("audio/correct.mp3"),i=new Audio("audio/wrong.mp3"),t=this.iR,r=this.randomNumbers,d=this.arrAudio,l=new Audio("".concat(d[r[t]])),g=document.querySelector(".btn-start");m.style="pointer-events: none",g.addEventListener("click",(function(){g.innerText="Repeat",g.classList.remove("btn-start"),g.classList.add("btn-repeat"),m.style="pointer-events: auto",l.play(),document.querySelector(".btn-repeat").addEventListener("click",(function(){l.play()}))}));for(var p=0;p<8;p++){var h=new o(this.theme,p);s.className="play-main",h.createPlayCard(p)}document.createElement("img").className="star",document.querySelectorAll(".card").forEach((function(e){e.addEventListener("click",(function(){if(e.id==r[t]){r.splice(t,1),t=u(r.length),(l=new Audio("".concat(d[r[t]]))).play(),a.play();var o=document.createElement("img");o.className="star win",o.src="./img/star-win.svg",e.style="opacity:0.5;",e.lastChild.firstChild.style="visibility:visible;",document.querySelector("#scale").prepend(o),e.style.pointerEvents="none",document.querySelector("#scale").prepend(o)}else{i.play(),document.querySelector("#pageContainer").classList.add("fail");var n=document.createElement("img");n.className="star wrong",n.src="./img/star.svg",n.className="star wrong",document.querySelector("#scale").prepend(n)}}))}))}}])&&d(a.prototype,t),e}();function u(e){return Math.floor(Math.random()*Math.floor(e))}function g(e,a){for(var i=0;i<a.length;i++){var t=a[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var p=document.querySelector("#main"),h=document.querySelector("#pageContainer"),f=new(function(){function i(e){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,i),this.mode=e}var t,r;return t=i,(r=[{key:"createContainerGame",value:function(i){var t=new l(i);switch(this.mode){case e:for(var r=0;r<8;r++)new o(i,r).createTrainCard();break;case a:t.createGame()}}},{key:"createMainPage",value:function(){for(var e=1;e<9;e++)new o(0,e).createMainPageCard()}},{key:"clearContainer",value:function(){for(;h.firstChild;)h.removeChild(h.firstChild);p.classList.contains("play-main")&&(p.classList.remove("play-main"),p.removeChild(document.querySelector("#scale")),p.removeChild(document.querySelector(".btn")))}}])&&g(t.prototype,r),i}())(e),w=document.querySelector("#pageContainer");f.createMainPage();var v=0,y=document.querySelector("#myInput"),S=document.querySelector("#menuToggle span"),b=function e(a){a.target!=y&&a.target!=S&&(y.checked=!1,document.removeEventListener("click",e))};y.addEventListener("click",(function(){this.checked&&document.addEventListener("click",b)})),window.onhashchange=function(){switch(f.clearContainer(),location.hash){case"#mainPage":f.createMainPage(),v=0;break;case"#action(setA)":f.createContainerGame(1),v=1;break;case"#action(setB)":f.createContainerGame(2),v=2;break;case"#animal(setA)":f.createContainerGame(3),v=3;break;case"#animal(setB)":f.createContainerGame(4),v=4;break;case"#clothes(setA)":f.createContainerGame(5),v=5;break;case"#clothes(setB)":f.createContainerGame(6),v=6;break;case"#emotions(setA)":f.createContainerGame(7),v=7;break;case"#emotions(setB)":f.createContainerGame(8),v=8;break;default:f.createMainPage(),v=0}document.querySelectorAll("a").forEach((function(e){e.classList.remove("currentPage")})),document.getElementById("".concat(v)).classList.add("currentPage")};var j=document.querySelector(".switcher");j.addEventListener("click",(function(){j.classList.toggle("active"),Array.from(document.querySelectorAll(".switcher-label")).forEach((function(e){return e.classList.toggle("mode")})),f.clearContainer(),document.querySelector(".header").classList.toggle("game-header"),f.mode==e?f.mode=a:f.mode=e,0!=v?f.createContainerGame(v):f.createMainPage()})),document.body.addEventListener("click",(function(){if(document.querySelectorAll(".star").length>=10&&document.querySelectorAll(".wrong").forEach((function(e){return e.remove()})),8==document.querySelectorAll(".win").length)if(document.querySelector("#pageContainer").classList.contains("fail")){new Audio("./audio/failure.mp3").play(),f.clearContainer();var e=document.createElement("img");e.src="./img/failure.jpg",w.appendChild(e),setTimeout((function(){f.clearContainer(),f.createMainPage(),v=0}),3e3)}else{new Audio("./audio/success.mp3").play(),f.clearContainer();var a=document.createElement("img");a.src="./img/success.jpg",w.appendChild(a),setTimeout((function(){f.clearContainer(),f.createMainPage(),v=0}),3e3)}}))})()})();
//# sourceMappingURL=script.js.map