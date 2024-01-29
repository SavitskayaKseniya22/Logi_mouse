import './features.scss';

import { software } from './components/software/software.js';
import { carousel } from './components/carousel/carousel.js';
import img_mouse from './assets/img-mouse_main.png';

export function features() {
  const element = document.createElement('section');
  element.className = 'features';
  element.id = 'features';

  const featuresContent = `
      <div class="inner features__inner">
        <h2>с индивидуальными настройками</h2>
        <p class="features__info">
          Мышь MX Master 3 адаптируется под ваши рабочие процессы. Благодаря
          индивидуальным настройкам, вы сможете настроить кнопки и жесты
          практически под любое используемое приложение.
        </p>
        <img class="features__image"
          src=${img_mouse}
          width="1171"
          height="698"
          alt="Mouse features"
        /> 
      ${carousel().outerHTML}
      ${software().outerHTML}
      </div>
    `;

  element.insertAdjacentHTML('afterbegin', featuresContent);

  return element;
}
