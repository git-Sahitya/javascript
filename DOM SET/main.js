var element;

element = document.getElementById("header").innerHTML

console.log(element);

document.getElementById("header").innerHTML = "<h1>WOW</h1>";

element = document.getElementById("header").innerHTML

console.log(element);

document.getElementById("header").setAttribute("class","jjj");

element=document.getElementById("header").getAttribute("class");

console.log(element);
 
element = document.getElementById("header").attributes[2];

console.log(element);

