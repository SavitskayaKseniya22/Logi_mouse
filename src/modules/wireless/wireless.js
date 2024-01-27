import './wireless.scss';

import img_front from './assets/img-mouse_front.png';
import img_side from './assets/img-mouse_side.png';

export function wireless() {
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
              src=${img_front}
              alt="front side of the mouse"
            />
          </li>

          <li>
            <img
              class="wireless__img wireless__img_side"
              width="836"
              height="495"
              src=${img_side}
              alt="left side of the mouse"
            />
          </li>

        </ul>
      </div>
    `;

  element.insertAdjacentHTML('afterbegin', wirelessContent);
  return element;
}
