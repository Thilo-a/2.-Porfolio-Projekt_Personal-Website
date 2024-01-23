const arrow1 = document.getElementById("arrow-1")
const arrow2 = document.getElementById("arrow-2")


const first = document.getElementById("journey_box-1")
const second = document.getElementById("journey_box-2")
const third = document.getElementById("journey_box-3")
const fourth = document.getElementById("journey_box-4")
const fith = document.getElementById("journey_box-5")


const ACTIVECLASS = 'active'
const blocks = document.querySelectorAll(".contentbox")

blocks[0].classList.add(ACTIVECLASS);
blocks[1].classList.add(ACTIVECLASS);
blocks[2].classList.add(ACTIVECLASS);

function lastBox (){
    const check = document.querySelectorAll(`.${ACTIVECLASS}`)
    if(blocks[0] === check[0] && blocks[1] === check[1] && blocks[2] === check[2]){
        blocks[2].classList.remove(ACTIVECLASS)
        blocks[4].classList.add(ACTIVECLASS)
        /*fith.style.gridArea = "boxone";
        first.style.gridArea = "bowtwo";
        second.style.gridArea = "boxthree";*/
    }else if(blocks[0] === check[0] && blocks[1] === check[1] && blocks[4] === check[2]){
        blocks[1].classList.remove(ACTIVECLASS)
        blocks[3].classList.add(ACTIVECLASS)
       /* fourth.style.gridArea = "boxone";
        fith.style.gridArea = 'bowtwo';
        first.style.gridArea = 'boxthree'; */
    }else if (blocks[0] === check[0] && blocks[3] === check[1] && blocks[4] === check[2]){
        blocks[0].classList.remove(ACTIVECLASS)
        blocks[2].classList.add(ACTIVECLASS)
        /*third.style.gridArea = 'boxone';
        fourth.style.gridArea = 'bowtwo';
        fith.style.gridArea = 'boxthree';*/
    }else if (blocks[2] === check[0] && blocks[3] === check[1] && blocks[4] === check[2]){
        blocks[4].classList.remove(ACTIVECLASS)
        blocks[1].classList.add(ACTIVECLASS)
       /* second.style.gridArea = 'boxone';
        third.style.gridArea = 'bowtwo';
        fourth.style.gridArea = 'boxthree';*/
    }else if (blocks[1] === check[0] && blocks[2] === check[1] && blocks[3] === check[2]){
        blocks[3].classList.remove(ACTIVECLASS)
        blocks[0].classList.add(ACTIVECLASS)
       /* first.style.gridArea = 'boxone';
        second.style.gridArea = 'bowtwo';
        third.style.gridArea = 'boxthree';*/
    }
}

arrow1.addEventListener('click', lastBox)

function nextBox () {
    const check = document.querySelectorAll(`.${ACTIVECLASS}`)
    if(blocks[0] === check[0] && blocks[1] === check[1] && blocks[2] === check[2]){
        blocks[0].classList.remove(ACTIVECLASS)
        blocks[3].classList.add(ACTIVECLASS)
       /*second.style.gridArea = 'boxone';
        third.style.gridArea = 'bowtwo';
        fourth.style.gridArea = 'boxthree';*/
    }else if(blocks[1] === check[0] && blocks[2] === check[1] && blocks[3] === check[2]){
        blocks[1].classList.remove(ACTIVECLASS)
        blocks[4].classList.add(ACTIVECLASS)
        /*third.style.gridArea = 'boxone';
        fourth.style.gridArea = 'bowtwo';
        fith.style.gridArea = 'boxthree';*/
    }else if (blocks[2] === check[0] && blocks[3] === check[1] && blocks[4] === check[2]){
        blocks[2].classList.remove(ACTIVECLASS)
        blocks[0].classList.add(ACTIVECLASS)
       /* fourth.style.gridArea = 'boxone';
        fith.style.gridArea = 'bowtwo';
        first.style.gridArea = 'boxthree';*/
    }else if (blocks[0] === check[0] && blocks[3] === check[1] && blocks[4] === check[2]){
        blocks[3].classList.remove(ACTIVECLASS)
        blocks[1].classList.add(ACTIVECLASS)
        /*fith.style.gridArea = 'boxone';
        first.style.gridArea = 'bowtwo';
        second.style.gridArea = 'boxthree';*/
    }else if (blocks[0] === check[0] && blocks[1] === check[1] && blocks[4] === check[2]){
        blocks[4].classList.remove(ACTIVECLASS)
        blocks[2].classList.add(ACTIVECLASS)
        /*first.style.gridArea = 'boxone';
        second.style.gridArea = 'bowtwo';
        third.style.gridArea = 'boxthree';*/
    }
}

arrow2.addEventListener('click', nextBox)

//Header Scroll funktion

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 2900 || document.documentElement.scrollTop > 2900) {
    document.querySelector("header").classList.add("fixed");
  } else {
    document.querySelector("header").classList.remove("fixed");
  }
}

//Sliding landing image funktion 

document.addEventListener("DOMContentLoaded", function() {
    let currentImage = 1;
  
    function startAnimation() {
      setInterval(() => {
        document.getElementById(`image-${currentImage}`).style.transform = "translateX(-100%)";
        currentImage = (currentImage % 3) + 1;
        document.getElementById(`image-${currentImage}`).style.transform = "translateX(0)";
      }, 7500);
    }
  
    startAnimation();
  });

  //Menu onclick function 

  let mButton = document.getElementById('menubutton');
  let header = document.querySelector('header')

  mButton.onclick = function(){
    header.classList.toggle('active')
  }