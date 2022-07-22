
let slideNum = 1;
let dots = document.querySelectorAll(".dot");
let pics = document.querySelectorAll(".pic");


dots.forEach( (dot) => {
    dot.addEventListener("click", ()=>{
        document.getElementById("pic1").style.display = "block";
    }
    )
})