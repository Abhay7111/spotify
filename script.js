var crsr = document.querySelector(".cursor")
var login = document.querySelector(".login")
var text01 = document.querySelector(".text01")
var text02 = document.querySelector(".text02")
var text03 = document.querySelector(".text03")
var img01 = document.querySelector(".img01")
var img02 = document.querySelector(".img02")
var img03 = document.querySelector(".img03")
var img04 = document.querySelector(".img04")
var img05 = document.querySelector(".img05")
var audioover01 = document.querySelector(".audioover01")
var audioover02 = document.querySelector(".audioover02")
var audioover03 = document.querySelector(".audioover03")
var audioover04 = document.querySelector(".audioover04")
var audioover05 = document.querySelector(".audioover05")
var mainpages = document.querySelector(".mainpages")
var poster01 = document.querySelector(".poster01")
var poster02 = document.querySelector(".poster02")
var poster03 = document.querySelector(".poster03")
var poster04 = document.querySelector(".poster04")
var poster05 = document.querySelector(".poster05")


var create01 = document.querySelector(".create01")
var create02 = document.querySelector(".create02")

poster01.addEventListener("mousemove",function(){
     poster01.style.backgroundColor = "rgba(72, 72, 72, 0.794)"
})
poster01.addEventListener("mouseleave",function(){
     poster01.style.backgroundColor = "#141414"
})
poster02.addEventListener("mousemove",function(){
     poster02.style.backgroundColor = "rgba(72, 72, 72, 0.794)"
})
poster02.addEventListener("mouseleave",function(){
     poster02.style.backgroundColor = "#141414"
})
poster03.addEventListener("mousemove",function(){
     poster03.style.backgroundColor = "rgba(72, 72, 72, 0.794)"
})
poster03.addEventListener("mouseleave",function(){
     poster03.style.backgroundColor = "#141414"
})
poster04.addEventListener("mousemove",function(){
     poster04.style.backgroundColor = "rgba(72, 72, 72, 0.794)"
})
poster04.addEventListener("mouseleave",function(){
     poster04.style.backgroundColor = "#141414"
})
poster05.addEventListener("mousemove",function(){
     poster05.style.backgroundColor = "rgba(72, 72, 72, 0.794)"
})
poster05.addEventListener("mouseleave",function(){
     poster05.style.backgroundColor = "#141414"
})

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
})

login.addEventListener("mousemove",function(){
     crsr.style.width = "60px"
     crsr.style.height = "60px"
     text01.style.display = "block"
})
login.addEventListener("mouseleave",function(){
     crsr.style.width = "15px"
     crsr.style.height = "15px"
     text01.style.display = "none"
})

create01.addEventListener("mousemove",function(){
     crsr.style.width = "63px"
     crsr.style.height = "63px"
     text02.style.display = "block"
})
create01.addEventListener("mouseleave",function(){
     crsr.style.width = "15px"
     crsr.style.height = "15px"
     text02.style.display = "none"
})

create02.addEventListener("mousemove",function(){
     crsr.style.width = "63px"
     crsr.style.height = "63px"
     text03.style.display = "block"
})
create02.addEventListener("mouseleave",function(){
     crsr.style.width = "15px"
     crsr.style.height = "15px"
     text03.style.display = "none"
})

img01.addEventListener("mousemove",function(){
     audioover01.style.display = "block"
})
img01.addEventListener("mouseleave",function(){
     audioover01.style.display = "none"
})
img02.addEventListener("mousemove",function(){
     audioover02.style.display = "block"
})
img02.addEventListener("mouseleave",function(){
     audioover02.style.display = "none"
})
img03.addEventListener("mousemove",function(){
     audioover03.style.display = "block"
})
img03.addEventListener("mouseleave",function(){
     audioover03.style.display = "none"
})
img04.addEventListener("mousemove",function(){
     audioover04.style.display = "block"
})
img04.addEventListener("mouseleave",function(){
     audioover04.style.display = "none"
})
img05.addEventListener("mousemove",function(){
     audioover05.style.display = "block"
})
img05.addEventListener("mouseleave",function(){
     audioover05.style.display = "none"
})

mainpages.addEventListener("mousemove",function(){
     crsr.style.width = "0px"
     crsr.style.height = "0px"
     crsr.style.border = "none"
})
mainpages.addEventListener("mouseleave",function(){
     crsr.style.width = "15px"
     crsr.style.height = "15px"
     crsr.style.border = "0.1vh solid rgba(255, 255, 255, 0.542)"
})