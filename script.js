let siteBars = document.querySelector(".site_bars");

let navBars = document.querySelector(".bars");

navBars.addEventListener("click" , ()=>{
    siteBars.style.left = "0px"
})

let xMark = document.querySelector(".xmark");

xMark.addEventListener("click" , ()=>{
    siteBars.style.left = "-300px"
    siteBars.style.transition = "0.2s"
})