import 'bootstrap/js/dist/carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css';
import './style.scss';
import Header from './modules/top/top';
import Surfaces from './modules/surfaces/surfaces';
import Features from './modules/features/features';
import Wireless from './modules/wireless/wireless';
import Devices from './modules/devices/devices';
import Advantages from './modules/advantages/advantages';
import Footer from './modules/footer/footer';

customElements.define('footer-custom', Footer, { extends: 'div' });
customElements.define('surfaces-custom', Surfaces, { extends: 'div' });
customElements.define('features-custom', Features, { extends: 'div' });
customElements.define('advantages-custom', Advantages, { extends: 'div' });
customElements.define('devices-custom', Devices, { extends: 'div' });
customElements.define('wireless-custom', Wireless, { extends: 'div' });
customElements.define('header-custom', Header, { extends: 'div' });

function App() {
  return `
  <div is="header-custom"></div>
  <div is="wireless-custom"></div>
  <div is="surfaces-custom"></div>
  <div is="devices-custom"></div>
  <div is="features-custom"></div>
  <div is="advantages-custom"></div>
  <div is="footer-custom"></div>`;
}

document.body.insertAdjacentHTML('beforeend', App());
