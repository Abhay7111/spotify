var closebuttons01 = document.querySelector(".closebuttons01")

var audio01 = document.querySelector("#audio01")
var audio02 = document.querySelector("#audio02")
var audio03 = document.querySelector("#audio03")
var audio04 = document.querySelector("#audio04")
var audio05 = document.querySelector("#audio05")

var loopbtn01 = document.querySelector("#loopbtn01")
var loopdebtn01 = document.querySelector("#loopdebtn01")
var desable01 = document.querySelector(".desable01")

var loopbtn02 = document.querySelector("#loopbtn02")
var loopdebtn02 = document.querySelector("#loopdebtn02")
var desable02 = document.querySelector(".desable02")

var loopbtn03 = document.querySelector("#loopbtn03")
var loopdebtn03 = document.querySelector("#loopdebtn03")
var desable03 = document.querySelector(".desable03")

var loopbtn04 = document.querySelector("#loopbtn04")
var loopdebtn04 = document.querySelector("#loopdebtn04")
var desable04 = document.querySelector(".desable04")

var loopbtn05 = document.querySelector("#loopbtn05")
var loopdebtn05 = document.querySelector("#loopdebtn05")
var desable05 = document.querySelector(".desable05")

var play01 = document.querySelector(".play01")
var play02 = document.querySelector(".play02")
var play03 = document.querySelector(".play03")
var play04 = document.querySelector(".play04")
var play05 = document.querySelector(".play05")

var firstaudioa01 = document.querySelector(".firstaudioa01")
var secondaudioa01 = document.querySelector(".secondaudioa01")
var thirdaudioa01 = document.querySelector(".thirdaudio01")
var forthaudioa01 = document.querySelector(".fourthaudio01")
var fivethaudioa01 = document.querySelector(".fivethaudio01")


function enableLoop01() {
  audio01.loop = true;
}
function disableLoop01() {
  audio01.loop = false;
}
function enableLoop02() {
  audio02.loop = true;
}
function disableLoop02() {
  audio02.loop = false;
}
function enableLoop03() {
  audio03.loop = true;
}
function disableLoop03() {
  audio03.loop = false;
}
function enableLoop04() {
  audio04.loop = true;
}
function disableLoop04() {
  audio04.loop = false;
}
function enableLoop05() {
  audio05.loop = true;
}
function disableLoop05() {
  audio05.loop = false;
}

function playAudio01() {
  audio01.play();
  audio02.pause();
  audio03.pause();
  audio04.pause();
  audio05.pause();

  audio02.load();
  audio03.load();
  audio04.load();
  audio05.load();

  slaudio01.pause();
  slaudio02.pause();
  slaudio03.pause();
  slaudio04.pause();
}
function playAudio02() {
  audio01.pause();
  audio02.play();
  audio03.pause();
  audio04.pause();
  audio05.pause();

  audio01.load();
  audio03.load();
  audio04.load();
  audio05.load();

  slaudio01.pause();
  slaudio02.pause();
  slaudio03.pause();
  slaudio04.pause();
}
function playAudio03() {
  audio01.pause();
  audio02.pause();
  audio03.play();
  audio04.pause();
  audio05.pause();

  audio01.load();
  audio02.load();
  audio04.load();
  audio05.load();

  slaudio01.pause();
  slaudio02.pause();
  slaudio03.pause();
  slaudio04.pause();
}
function playAudio04() {
  audio01.pause();
  audio02.pause();
  audio03.pause();
  audio04.play();
  audio05.pause();

  audio01.load();
  audio03.load();
  audio02.load();
  audio05.load();

  slaudio01.pause();
  slaudio02.pause();
  slaudio03.pause();
  slaudio04.pause();
}
function playAudio05() {
  audio01.pause();
  audio02.pause();
  audio03.pause();
  audio04.pause();
  audio05.play();

  audio01.load();
  audio03.load();
  audio04.load();
  audio02.load();

  slaudio01.pause();
  slaudio02.pause();
  slaudio03.pause();
  slaudio04.pause();
}


loopbtn01.addEventListener("click", function () {
  loopbtn01.style.display = "none"
  loopdebtn01.style.display = "block"
  desable01.style.color = "blue"
})

loopbtn02.addEventListener("click", function () {
  loopbtn02.style.display = "none"
  loopdebtn02.style.display = "block"
  desable02.style.color = "blue"
})
loopbtn03.addEventListener("click", function () {
  loopbtn03.style.display = "none"
  loopdebtn03.style.display = "block"
  desable03.style.color = "blue"
})
loopbtn04.addEventListener("click", function () {
  loopbtn04.style.display = "none"
  loopdebtn04.style.display = "block"
  desable04.style.color = "blue"
})

loopbtn05.addEventListener("click", function () {
  loopbtn05.style.display = "none"
  loopdebtn05.style.display = "block"
  desable05.style.color = "blue"
})


loopdebtn01.addEventListener("click", function () {
  loopbtn01.style.display = "block"
  loopdebtn01.style.display = "none"
})
loopdebtn02.addEventListener("click", function () {
  loopbtn02.style.display = "block"
  loopdebtn02.style.display = "none"
})
loopdebtn03.addEventListener("click", function () {
  loopbtn03.style.display = "block"
  loopdebtn03.style.display = "none"
})
loopdebtn04.addEventListener("click", function () {
  loopbtn04.style.display = "block"
  loopdebtn04.style.display = "none"
})
loopdebtn05.addEventListener("click", function () {
  loopbtn05.style.display = "block"
  loopdebtn05.style.display = "none"
})



play01.addEventListener("click", function () {
  firstaudioa01.style.display = "block"
  closebuttons01.style.display = "block"
  secondaudioa01.style.display = "none"
  thirdaudioa01.style.display = "none"
  forthaudioa01.style.display = "none"
  fivethaudioa01.style.display = "none"
  sleepaudio.style.display = "none"
})
play02.addEventListener("click", function () {
  firstaudioa01.style.display = "none"
  secondaudioa01.style.display = "block"
  closebuttons01.style.display = "block"
  thirdaudioa01.style.display = "none"
  forthaudioa01.style.display = "none"
  fivethaudioa01.style.display = "none"
  sleepaudio.style.display = "none"
})
play03.addEventListener("click", function () {
  firstaudioa01.style.display = "none"
  secondaudioa01.style.display = "none"
  thirdaudioa01.style.display = "block"
  closebuttons01.style.display = "block"
  forthaudioa01.style.display = "none"
  fivethaudioa01.style.display = "none"
  sleepaudio.style.display = "none"
})
play04.addEventListener("click", function () {
  firstaudioa01.style.display = "none"
  secondaudioa01.style.display = "none"
  thirdaudioa01.style.display = "none"
  forthaudioa01.style.display = "block"
  closebuttons01.style.display = "block"
  fivethaudioa01.style.display = "none"
  sleepaudio.style.display = "none"
})
play05.addEventListener("click", function () {
  firstaudioa01.style.display = "none"
  secondaudioa01.style.display = "none"
  thirdaudioa01.style.display = "none"
  forthaudioa01.style.display = "none"
  sleepaudio.style.display = "none"
  fivethaudioa01.style.display = "block"
  closebuttons01.style.display = "block"
})

// Sleeping audio

var clikplay01 = document.querySelector(".clikplay01")
var clikplay02 = document.querySelector(".clikplay02")
var clikplay03 = document.querySelector(".clikplay03")
var clikplay04 = document.querySelector(".clikplay04")

var slaudio01 = document.querySelector("#slaudio01")
var slaudio02 = document.querySelector("#slaudio02")
var slaudio03 = document.querySelector("#slaudio03")
var slaudio04 = document.querySelector("#slaudio04")

var sleepaudio01 = document.querySelector(".sleepfa01")
var sleepaudio02 = document.querySelector(".sleepfa02")
var sleepaudio03 = document.querySelector(".sleepfa03")
var sleepaudio04 = document.querySelector(".sleepfa04")
var sleepaudio = document.querySelector(".sleepaudio")


clikplay01.addEventListener("click", function () {
  sleepaudio01.style.display = "block"
  sleepaudio.style.display = "block"
  closebuttons01.style.display = "block"
  sleepaudio02.style.display = "none"
  sleepaudio03.style.display = "none"
  sleepaudio04.style.display = "none"
})
clikplay02.addEventListener("click", function () {
  sleepaudio01.style.display = "none"
  sleepaudio02.style.display = "block"
  sleepaudio.style.display = "block"
  closebuttons01.style.display = "block"
  sleepaudio03.style.display = "none"
  sleepaudio04.style.display = "none"
})
clikplay03.addEventListener("click", function () {
  sleepaudio01.style.display = "none"
  sleepaudio02.style.display = "none"
  sleepaudio03.style.display = "block"
  closebuttons01.style.display = "block"
  sleepaudio.style.display = "block"
  sleepaudio04.style.display = "none"
})
clikplay04.addEventListener("click", function () {
  sleepaudio01.style.display = "none"
  sleepaudio02.style.display = "none"
  sleepaudio03.style.display = "none"
  sleepaudio04.style.display = "block"
  closebuttons01.style.display = "block"
  sleepaudio.style.display = "block"
})

function playslAudio01() {
  audio01.pause();
  audio02.pause();
  audio03.pause();
  audio04.pause();
  audio05.pause();

  audio02.load();
  audio03.load();
  audio04.load();
  audio05.load();

  slaudio01.play();
  slaudio02.pause();
  slaudio03.pause();
  slaudio04.pause();
}

function playslAudio02() {
  audio01.pause();
  audio02.pause();
  audio03.pause();
  audio04.pause();
  audio05.pause();

  audio02.load();
  audio03.load();
  audio04.load();
  audio05.load();

  slaudio01.pause();
  slaudio02.play();
  slaudio03.pause();
  slaudio04.pause();
}

function playslAudio03() {
  audio01.pause();
  audio02.pause();
  audio03.pause();
  audio04.pause();
  audio05.pause();

  audio02.load();
  audio03.load();
  audio04.load();
  audio05.load();

  slaudio01.pause();
  slaudio02.pause();
  slaudio03.play();
  slaudio04.pause();
}

function playslAudio04() {
  audio01.pause();
  audio02.pause();
  audio03.pause();
  audio04.pause();
  audio05.pause();

  audio02.load();
  audio03.load();
  audio04.load();
  audio05.load();

  slaudio01.pause();
  slaudio02.pause();
  slaudio03.pause();
  slaudio04.play();
}

closebuttons01.addEventListener("click", function () {
  sleepaudio.style.display = "none"
  closebuttons01.style.display = "none"
  firstaudioa01.style.display = "none"
  secondaudioa01.style.display = "none"
  thirdaudioa01.style.display = "none"
  forthaudioa01.style.display = "none"
  fivethaudioa01.style.display = "none"
})

function pauseallaudios() {
  audio01.pause();
  audio02.pause();
  audio03.pause();
  audio04.pause();
  audio05.pause();

  audio02.load();
  audio03.load();
  audio04.load();
  audio05.load();

  slaudio01.pause();
  slaudio02.pause();
  slaudio03.pause();
  slaudio04.pause();
}