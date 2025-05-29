let c = document.querySelector(".c");
c.addEventListener("click", () => {

   new Audio('./audios/piano-mp3_C6.mp3').play()
   c.style.background = "#D8D8D8";
   setTimeout(() => {
      c.style.background = "white";
   }, 500);
});

 let d = document.querySelector(".d");
 d.addEventListener("click",function () {
   new Audio('./audios/piano-mp3_D6.mp3').play();
   d.style.background = "#D8D8D8";
   setTimeout(() => {
      d.style.background = "white";
   }, 500);
})
let e=document.querySelector(".e");
e.addEventListener("click", () => {
   new Audio('./audios/piano-mp3_E6.mp3').play();
    e.style.background = "#D8D8D8";
   setTimeout(() => {
      e.style.background = "white";
   }, 500);

})
let f=document.querySelector(".f");
f.addEventListener("click", () => {
   new Audio('./audios/piano-mp3_E6.mp3').play();
 f.style.background = "#D8D8D8";
   setTimeout(() => {
      f.style.background = "white";
   }, 500);

})
let g =document.querySelector(".g");
g.addEventListener("click", () => {
   new Audio('./audios/piano-mp3_G6.mp3').play();
 g.style.background = "#D8D8D8";
   setTimeout(() => {
      g.style.background = "white";
   }, 500);

})

let a=document.querySelector(".a");
a.addEventListener("click", () => {
   new Audio('./audios/a6.mp3').play();
    a.style.background = "#D8D8D8";
   setTimeout(() => {
      a.style.background = "white";
   }, 500);

})
let b =document.querySelector(".b");
b.addEventListener("click", () => {
   new Audio('./audios/b6.mp3').play();
     b.style.background = "#D8D8D8";
   setTimeout(() => {
      b.style.background = "white";
   }, 500);

})

document.querySelector(".b1").addEventListener("click", (e) => {
   e.stopPropagation();
   new Audio('./audios/Db6.mp3').play();
  

})
document.querySelector(".b2").addEventListener("click", (e) => {
   e.stopPropagation();
   new Audio('./audios/Eb6.mp3').play();
})

document.querySelector(".b3").addEventListener("click", (e) => {
   e.stopPropagation();
   new Audio('./audios/Gb6.mp3').play();
})
document.querySelector(".b4").addEventListener("click", (e) => {
   e.stopPropagation();
   new Audio('./audios/Ab6.mp3').play();
   

})
document.querySelector(".b5").addEventListener("click", (e) => {
   e.stopPropagation();

   new Audio('./audios/Bb6.mp3').play();
})


document.addEventListener("keypress", function (event) {
   key = event.key;
   switch (key) {

      case 'z':
         new Audio('./audios/piano-mp3_C6.mp3').play();
         c.style.background = "#D8D8D8";
         setTimeout(() => {
            c.style.background = "white";
         }, 500);
         break;

      case 'x':
         new Audio('./audios/piano-mp3_D6.mp3').play();
        d.style.background = "#D8D8D8";
         setTimeout(() => {
            d.style.background = "white";
         }, 500);
         break;

      case 'c':
         new Audio('./audios/piano-mp3_E6.mp3').play();
           e.style.background = "#D8D8D8";
         setTimeout(() => {
            e.style.background = "white";
         }, 500);
         break;

      case 'v':
         new Audio('./audios/piano-mp3_F6.mp3').play();
           f.style.background = "#D8D8D8";
         setTimeout(() => {
            f.style.background = "white";
         }, 500);
         break;


      case 'b':
         new Audio('./audios/piano-mp3_G6.mp3').play();
           g.style.background = "#D8D8D8";
         setTimeout(() => {
            g.style.background = "white";
         }, 500);
         break;

      case 'n':
         new Audio('./audios/a6.mp3').play();
           a.style.background = "#D8D8D8";
         setTimeout(() => {
            a.style.background = "white";
         }, 500);
    
         break;

      case 'm':
         new Audio('./audios/b6.mp3').play();
           b.style.background = "#D8D8D8";
         setTimeout(() => {
            b.style.background = "white";
         }, 500);
         break;


   }



});

document.addEventListener("keypress", function (event) {
   key = event.key;
   switch (key) {

      case 'd':
         new Audio('./audios/Db6.mp3').play();
         break;
      
         case 'f':
         new Audio('./audios/Eb6.mp3').play();
         break;
         
         case 'g':
         new Audio('./audios/Gb6.mp3').play();
         break;
      
         case 'h':
         new Audio('./audios/Ab6.mp3').play();
         break;

         case 'j':
         new Audio('./audios/Bb6.mp3').play();
         break;

   }
});
