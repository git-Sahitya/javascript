var element;

document.getElementById("contant").addEventListener("click",abc);

function abc (){

     document.getElementById("contant").classList.remove("xyz"); //toggle in place of remove.

    var a =document.getElementById("contant").classList;
    
    console.log(a);

}