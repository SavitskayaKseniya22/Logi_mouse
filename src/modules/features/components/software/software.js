import './software.scss';

import imgPs from '../../assets/apps/img_ps.png';
import imgBrowsers from '../../assets/apps/img_browsers.png';
import imgEx from '../../assets/apps/img_ex.png';
import imgPoint from '../../assets/apps/img_point.png';
import imgWord from '../../assets/apps/img_word.png';
import imgPr from '../../assets/apps/img_pr.png';
import imgVid from '../../assets/apps/img_vid.png';

export default function software() {
  const element = document.createElement('div');
  element.className = 'software';

  const softwareContent = `
          <ul class="software__list">
            <li>
              <img
                src=${imgPs}
                width="35"
                height="35"
                alt="photoshop"
              />
            </li> 
            <li>
              <img
                src=${imgPr}
                width="35"
                height="35"
                alt="premier"
              />
            </li>
            <li>
              <img
                class="software_item_long
                width="80"
                height="35"
                src=${imgBrowsers}
                alt="brousers"
              />
            </li>
            <li>
              <img src=${imgWord} width="40" height="35" alt="word" />
            </li>
            <li>
              <img
                src=${imgPoint}
                width="40"
                height="35"
                alt="powerpoint"
              />
            </li>

           <li>
              <img src=${imgEx} width="40" height="35" alt="excel" />
            </li>
            <li>
              <img
                src=${imgVid}
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
