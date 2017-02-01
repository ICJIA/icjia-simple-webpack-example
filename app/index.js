
//import css
import './css/app.css'

function component (el, text) {
  var element = document.createElement(el);
  element.innerHTML = text;
  return element;
}

document.body.appendChild(component('div','Hello World!'));
document.body.appendChild(component('div','Hello from javascript'));
