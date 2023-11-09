function allowDrop(ev) {
   ev.preventDefault();
 }
 
 function drag(ev) {
   ev.dataTransfer.setData("text", ev.target.id);
 }
 
 function drop(ev) {
   ev.preventDefault();
   var data = ev.dataTransfer.getData("text");
   ev.target.appendChild(document.getElementById(data));
 }

 function rand(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
   }
   
function aleatorio(){
   var num = rand(0,7);
   return num;
   
}

function Gravity_Falls(){
   const imagem = document.querySelector("img");

let imagens = ["dippe_shadow.png", "mabel_shadow.png","stan_shadow.png","Waddles_shadow.png","wendy_shadow.png","ford_shadow.png","Gideon_shadow.png","robbie_shadow.png"];

var sombra=imagens[aleatorio()];
imagem.setAttribute("src",`./img/${sombra}`);

 }