
//import css
import './css/app.css'

// import ICJIA image
import image from './img/logo.png';

// create element w/text -- inject into DOM
function component (el, text) {
  var element = document.createElement(el);
  element.innerHTML = text;
  return element;
}

var img = document.createElement("img");
img.src = image;
document.body.appendChild(img);

document.body.appendChild(component('br',''));
document.body.appendChild(component('br',''));

document.body.appendChild(component('div','Testing from Jin!'));
document.body.appendChild(component('div','Hello from ICJIA'));

//The following is testing from Jin
/*
alert ("Testing...");
confirm ("Learning javascript!");
prompt("Do you want to learn javascript?");

//for loops
for (var i =0; i<11;i++){
  console.log(i);
}

for (var i = 1; i <= 100; i++){
  if(i%3 === 0){
    if(i%5 === 0){
      console.log("FizzBuzz");
    }
    else {
      console.log("Fizz");
    }
  }
  else if (i%5 === 0) {
    console.log("Buzz");
  }
  else{
    console.log(i);
  }
}

//functions
function calculateArea(side1, side2){
  console.log (side1*side2);
}
calculateArea (10,40);

//Arrays
var friends=["Mark","Lisa","Denny","Bob","Mary"];
function greetFriends(){
  for(var i = 0; i < friends.length; i++ ) {
    console.log ("oh hi " + friends[i]);
  }
}
greetFriends();

//Objects
var myCoffee = {
  flavor: "espresso",
  temporature: "piping hot",
  ounce: 100,
  milk: true,

  reheat: function(){
    if(myCoffee.temporature === "cold") {
      myCoffee.temporature = "piping hot";
      alert("your coffee has been reheated!");
    }
  }
};
myCoffee.temporature = "cold";
myCoffee.reheat();

//object constructor
function Friend(name,tskirtColor) {
  this.name = name;
  this.tskirtColor = tskirtColor;
}
var denny = new Friend ("Denny", "green");
var lisa = new Friend ("Lisa", "red")

alert(denny.name);
alert(lisa.tskirtColor);
*/
