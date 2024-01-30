import './wireless.scss';

import imgFront from './assets/img-mouse_front.png';
import imgSide from './assets/img-mouse_side.png';

export default function wireless() {
  const element = document.createElement('section');
  element.className = 'wireless';
  element.id = 'wireless';

  const wirelessContent = `
      <div class="inner wireless__inner">

        <h2>без проводов</h2>

        <p class="wireless__info">
          Беспроводная мышь MX Master 3 работает без проводов до нескольких
          месяцев. Вы закроете приоритетные задачи прежде, чем понадобится
          подзарядка.
        </p>

        <span class="wireless__addition">
          <span class="wireless__addition_main">70</span>
          <span class="wireless__addition_sub">дней</span>
        </span>

        <ul class="wireless__img-container">
          <li>
            <img
              class="wireless__img wireless__img_front"
              width="533"
              height="286"
              src=${imgFront}
              alt="front side of the mouse"
            />
          </li>

          <li>
            <img
              class="wireless__img wireless__img_side"
              width="836"
              height="495"
              src=${imgSide}
              alt="left side of the mouse"
            />
          </li>

        </ul>
      </div>
    `;

  element.insertAdjacentHTML('afterbegin', wirelessContent);
  return element;
}
