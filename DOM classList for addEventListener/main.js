var element;

document.getElementById("header").addEventListener("click",abc);

function abc(){

    document.getElementById("header").classList.add("xyz","efg");

    var a = document.getElementById("header").classList;

    console.log(a);
}
  
