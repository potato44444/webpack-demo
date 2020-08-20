import _ from 'lodash'
import './style.css'
import icon from './icon.png'
function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const Icon = new Image();
  Icon.src = icon;
  element.appendChild(Icon);

  return element;
}

document.body.appendChild(component());