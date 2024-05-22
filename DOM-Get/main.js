 var element;

 element = document.getElementById("contant").innerText;

 console.log(element);                               // element get by the help of this method.

 element = document.getElementById("header").innerText;

 console.log(element);

 element = document.getElementById("contant").innerHTML;

 console.log(element);                               // element get by the help of this method.

 element = document.getElementById("header").innerHTML;

 console.log(element);

 element = document.getElementById("contant").getAttribute("id");

 console.log(element);                               // element get by the help of this method.

 element = document.getElementById("header").getAttributeNode("id");

 console.log(element);

 element = document.getElementById("header").attributes;

 console.log(element);