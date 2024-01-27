import './carousel.scss';

import img_1 from '../../assets/carousel/img-1.png';
import img_1_middle from '../../assets/carousel/img-1_middle.png';
import img_2 from '../../assets/carousel/img-2.png';
import img_2_middle from '../../assets/carousel/img-2_middle.png';
import img_3 from '../../assets/carousel/img-3.png';
import img_3_middle from '../../assets/carousel/img-3_middle.png';
import img_4 from '../../assets/carousel/img-4.png';
import img_4_middle from '../../assets/carousel/img-4_middle.png';
import img_5 from '../../assets/carousel/img-5.png';
import img_5_middle from '../../assets/carousel/img-5_middle.png';
import img_6 from '../../assets/carousel/img-6.png';
import img_6_middle from '../../assets/carousel/img-6_middle.png';

export function carousel() {
  const element = document.createElement('div');
  element.className = 'carousel slide features__carousel';
  element.id = 'features__carousel';
  element['data-bs-ride'] = 'carousel';

  const carouselContent = `
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src=${img_1}
                srcset="${img_1} 375w, ${img_1_middle} 894w"
                sizes="(max-width: 893px) 375px,
                              894px"
                class="d-block w-100"
                alt="carousel 1 slide"
              />
            </div>

            <div class="carousel-item">
              <img
                src=${img_2}
               srcset="${img_2} 375w, ${img_2_middle} 894w"
                sizes="(max-width: 893px) 375px,
                              894px"
                class="d-block w-100"
                alt="carousel 2 slide"
              />
            </div>

            <div class="carousel-item">
              <img
                src=${img_3}
                srcset="${img_3} 375w, ${img_3_middle} 894w"
                sizes="(max-width: 893px) 375px,
                           894px"
                class="d-block w-100"
                alt="carousel 3 slide"
              />
            </div>

            <div class="carousel-item">
              <img
                src=${img_4}
                srcset="${img_4} 375w, ${img_4_middle} 894w"
                sizes="(max-width: 893px) 375px,
                            894px"
                class="d-block w-100"
                alt="carousel 4 slide"
              />
            </div>

            <div class="carousel-item">
              <img
                src=${img_5}
                srcset="${img_5} 375w, ${img_5_middle} 894w"
                sizes="(max-width: 893px) 375px,
                            894px"
                class="d-block w-100"
                alt="carousel 5 slide"
              />
            </div>

            <div class="carousel-item">
              <img
                src=${img_6}
                srcset="${img_6} 375w, ${img_6_middle} 894w"
                sizes="(max-width: 893px) 375px,
                            894px"
                class="d-block w-100"
                alt="carousel 6 slide"
              />
            </div>
          </div>

          <div class="features__carousel-indicators carousel-indicators">
            <button
              type="button"
              data-bs-target="#features__carousel"
              data-bs-slide-to="0"
              aria-current="true"
              aria-label="Slide 1"
              class="carousel-indicator active"
            ></button>
            <button
              type="button"
              data-bs-target="#features__carousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              class="carousel-indicator"
            ></button>
            <button
              type="button"
              data-bs-target="#features__carousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              class="carousel-indicator"
            ></button>
            <button
              type="button"
              data-bs-target="#features__carousel"
              data-bs-slide-to="3"
              aria-label="Slide 4"
              class="carousel-indicator"
            ></button>
            <button
              type="button"
              data-bs-target="#features__carousel"
              data-bs-slide-to="4"
              aria-label="Slide 5"
              class="carousel-indicator"
            ></button>
            <button
              type="button"
              data-bs-target="#features__carousel"
              data-bs-slide-to="5"
              aria-label="Slide 6"
              class="carousel-indicator"
            ></button>
          </div>
          
          
    `;

  element.insertAdjacentHTML('afterbegin', carouselContent);
  return element;
}
