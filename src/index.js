import 'normalize.css';
import './style.scss';

import { advantages } from './modules/advantages/advantages.js';
import { footer } from './modules/footer/footer.js';

function getContainer() {
  const element = document.createElement('div');
  element.appendChild(advantages());
  element.appendChild(footer());
  return element;
}

document.body.appendChild(getContainer());
