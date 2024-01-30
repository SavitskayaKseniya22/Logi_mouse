import 'bootstrap/js/dist/carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css';
import './style.scss';
import top from './modules/top/top';
import surfaces from './modules/surfaces/surfaces';
import features from './modules/features/features';
import wireless from './modules/wireless/wireless';
import devices from './modules/devices/devices';
import advantages from './modules/advantages/advantages';
import footer from './modules/footer/footer';

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

document.querySelector('input#toggle').addEventListener('change', (event) => {
  const { checked } = event.target;
  document.body.style.overflow = checked ? 'hidden' : 'unset';
});

document.querySelectorAll('.top__navigator_slide a').forEach((elem) => {
  elem.addEventListener('click', () => {
    document.querySelector('input#toggle').checked = false;
    document.body.style.overflow = 'unset';
  });
});
