var settings = document.querySelector("#settings")
var settingsdiv = document.querySelector(".settings")
var cursor = document.querySelector(".cursor")
var close01 = document.querySelector(".close01")
var opencursor = document.querySelector(".opencursor")
var closecursor = document.querySelector(".closecursor")
var mainsettings = document.querySelector(".mainsettings")
var testing = document.querySelector("#testing")
var firstaudioa01 = document.querySelector(".firstaudioa01")

settings.addEventListener("click", function () {
     settingsdiv.style.display = "block"
})
close01.addEventListener("click", function () {
     settingsdiv.style.display = "none"
})
opencursor.addEventListener("click", function () {
     cursor.style.display = "block"
     opencursor.style.display = "none"
     closecursor.style.display = "block"
     // mainsettings.addEventListener("mousemove", function () {
     //      cursor.style.display = "none"
     // })
     // mainsettings.addEventListener("mouseleave", function () {
     //      cursor.style.display = "block"
     // })
})
closecursor.addEventListener("click",function(){
     cursor.style.display = "none"
     opencursor.style.display = "block"
     closecursor.style.display = "none"
})