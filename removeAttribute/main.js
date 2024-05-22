var element;

element = document.getElementById("header").innerHTML="<h1>JOJO</h1>";

console.log(element);

document.getElementById("header").attributes[1].value="jojo";

element = document.getElementById("header").getAttribute("class");

console.log(element);

document.getElementById("header").removeAttribute("style");

element = document.getElementById("header").attributes;

console.log(element);