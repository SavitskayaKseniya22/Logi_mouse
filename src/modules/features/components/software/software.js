import './software.scss';

import img_ps from '../../assets/apps/img_ps.png';
import img_browsers from '../../assets/apps/img_browsers.png';
import img_ex from '../../assets/apps/img_ex.png';
import img_point from '../../assets/apps/img_point.png';
import img_word from '../../assets/apps/img_word.png';
import img_pr from '../../assets/apps/img_pr.png';
import img_vid from '../../assets/apps/img_vid.png';

export function software() {
  const element = document.createElement('div');
  element.className = 'software';

  const softwareContent = `
          <ul class="software__list">
            <li>
              <img
                src=${img_ps}
                width="35"
                height="35"
                alt="photoshop"
              />
            </li>
            <li>
              <img
                class="software_item_long
                width="80"
                height="35"
                src=${img_browsers}
                alt="brousers"
              />
            </li>
            <li>
              <img src=${img_ex} width="40" height="35" alt="excel" />
            </li>
            <li>
              <img
                src=${img_point}
                width="40"
                height="35"
                alt="powerpoint"
              />
            </li>
            <li>
              <img src=${img_word} width="40" height="35" alt="word" />
            </li>
            <li>
              <img
                src=${img_pr}
                width="35"
                height="35"
                alt="premier"
              />
            </li>
            <li>
              <img
                src=${img_vid}
                width="35"
                height="35"
                alt="movie-editor"
              />
            </li>
          </ul>
          <p class="software__info">
            Начните работать продуктивнее с момента покупки — устройство
            предварительно оптимизировано под популярные приложения на Windows и
            Mac.
          </p>
    `;

  element.insertAdjacentHTML('afterbegin', softwareContent);
  return element;
}
