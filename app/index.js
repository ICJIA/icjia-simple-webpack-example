
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

document.body.appendChild(component('div','Hello World!'));
document.body.appendChild(component('div','Hello from javascript'));
