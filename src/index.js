import 'normalize.css';
import './style.scss';

import { devices } from './modules/devices/devices.js';
import { advantages } from './modules/advantages/advantages.js';
import { footer } from './modules/footer/footer.js';

function getContainer() {
  const element = document.createElement('div');
  element.appendChild(devices());
  element.appendChild(advantages());
  element.appendChild(footer());
  return element;
}

document.body.appendChild(getContainer());
