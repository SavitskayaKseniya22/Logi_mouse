import 'bootstrap/js/dist/carousel.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css';
import './style.scss';

import { top } from './modules/top/top.js';
import { surfaces } from './modules/surfaces/surfaces.js';
import { features } from './modules/features/features.js';
import { wireless } from './modules/wireless/wireless.js';
import { devices } from './modules/devices/devices.js';
import { advantages } from './modules/advantages/advantages.js';
import { footer } from './modules/footer/footer.js';

function getContainer() {
  const element = document.createElement('div');
  element.appendChild(top());
  element.appendChild(wireless());
  element.appendChild(surfaces());
  element.appendChild(devices());
  element.appendChild(features());
  element.appendChild(advantages());
  element.appendChild(footer());
  return element;
}

document.body.appendChild(getContainer());
