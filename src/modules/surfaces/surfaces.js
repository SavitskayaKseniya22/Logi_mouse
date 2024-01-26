import './surfaces.scss';

import { carousel } from './components/carousel/carousel.js';

export function surfaces() {
  const element = document.createElement('section');
  element.className = 'surfaces inner';
  element.id = 'surfaces';

  const surfacesContent = `
      <h2>за любым столом</h2>
      <p>
        Исследуйте ландшафты своего дома, не отвлекаясь от работы. MX Master 3
        достаточно компактная, чтобы сменить рабочее место и перенестись с
        ноутбуком на кухню.
      </p>

      <ul class="surfaces__advantages">
        <li>
          <span>В 5 раз</span>
          <p>точнее предшественников</p>
        </li>
        <li>
          <span>4 000</span>
          <p>точек на дюйм чувствительность датчика</p>
        </li>
      </ul>

        ${carousel().outerHTML}
      <p>
        Благодаря технологии Logitech Darkfierd, MX Master 3 работает на любой
        поверхности, даже на стекле.
      </p>
    `;

  element.insertAdjacentHTML('afterbegin', surfacesContent);
  return element;
}
