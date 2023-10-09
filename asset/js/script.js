function darkM (){
var all = document.getElementsByTagName("*");
for (var i=0, max=all.length; i < max; i++) {
 all[i].style.color = "#eee";
 all[i].style.backgroundColor = "#222";
}  

const logo = document.getElementById('logo');
logo.onload = logo.src = "./asset/img/iVg (1).svg";

const dark = document.getElementById('darkMode');
dark.style.display = 'none';
const light = document.getElementById('lightMode');
light.style.display = 'block';

window.localStorage.setItem('isDarkMode',true)
}

function lightM(){
var all = document.getElementsByTagName("*");
for (var i=0, max=all.length; i < max; i++) {
 all[i].style.color = "";
 all[i].style.backgroundColor = "";
} 

const logo = document.getElementById('logo');
logo.onload = logo.src = "./asset/img/iVg%20(1).svg";

const light = document.getElementById('lightMode');
light.style.display = 'none';
const dark = document.getElementById('darkMode');
dark.style.display = 'block';

window.localStorage.setItem('isDarkMode',false)
}

const isDarkMode = window.localStorage.getItem('isDarkMode') || false;
if (isDarkMode==='true') {
darkM()
}
else {
lightM()
}
const darkMode = document.getElementById('darkMode');
darkMode.addEventListener('click', darkM); 

const lightMode = document.getElementById('lightMode');
lightMode.addEventListener('click', lightM); 


/* button function section */
function myFunction() {
  var breakPoint = document.getElementsByClassName("breakPoint");
  var moreCards = document.getElementsByClassName("more");
  var btnCards = document.getElementsByClassName("showBtn");
  

  for (var i = 0; i < breakPoint.length; i++) {  
    if (breakPoint[i].style.display === "none") {
        breakPoint[i].style.display = "inline";
      btnCards[i].innerHTML = "Show more"; 
      moreCards[i].style.display = "none";
    } else {
      breakPoint[i].style.display = "none";
      btnCards[i].innerHTML = "Show less"; 
      moreCards[i].style.display = "grid";
    }
 }
}

function myFunction1() {
  var breakPoint = document.getElementsByClassName("breakPoint1");
  var moreCards = document.getElementsByClassName("more1");
  var btnCards = document.getElementsByClassName("showBtn1");
  

  for (var i = 0; i < breakPoint.length; i++) {  
    if (breakPoint[i].style.display === "none") {
        breakPoint[i].style.display = "inline";
      btnCards[i].innerHTML = "Show more"; 
      moreCards[i].style.display = "none";
    } else {
      breakPoint[i].style.display = "none";
      btnCards[i].innerHTML = "Show less"; 
      moreCards[i].style.display = "grid";
    }
 }
}

function myFunction2() {
  var breakPoint = document.getElementsByClassName("breakPoint2");
  var moreCards = document.getElementsByClassName("more2");
  var btnCards = document.getElementsByClassName("showBtn2");
  

  for (var i = 0; i < breakPoint.length; i++) {  
    if (breakPoint[i].style.display === "none") {
        breakPoint[i].style.display = "inline";
      btnCards[i].innerHTML = "Show more"; 
      moreCards[i].style.display = "none";
    } else {
      breakPoint[i].style.display = "none";
      btnCards[i].innerHTML = "Show less"; 
      moreCards[i].style.display = "grid";
    }
 }
}
