var element ;

document.getElementById("header").addEventListener("mouseleave",abc);

document.getElementById("header").addEventListener("click", xyz);

function abc(){

    document.getElementById("header").style.background="green";

}
function xyz(){

    document.getElementById("header").removeEventListener("mouseleave", abc);
}