import './carousel.scss';

import img1 from '../../assets/carousel/img-1.png';
import img1Middle from '../../assets/carousel/img-1_middle.png';
import img2 from '../../assets/carousel/img-2.png';
import img2Middle from '../../assets/carousel/img-2_middle.png';
import img3 from '../../assets/carousel/img-3.png';
import img3Middle from '../../assets/carousel/img-3_middle.png';
import img4 from '../../assets/carousel/img-4.png';
import img4Middle from '../../assets/carousel/img-4_middle.png';
import img5 from '../../assets/carousel/img-5.png';
import img5Middle from '../../assets/carousel/img-5_middle.png';
import img6 from '../../assets/carousel/img-6.png';
import img6Middle from '../../assets/carousel/img-6_middle.png';

export default class CarouselSoftware extends HTMLDivElement {
  constructor() {
    super();
    this.className = 'carousel slide features__carousel';
    this.id = 'features__carousel';
    this['data-bs-ride'] = 'carousel';
  }

  render() {
    this.insertAdjacentHTML(
      'afterbegin',
      `
      <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src=${img1}
                srcset="${img1} 375w, ${img1Middle} 894w"
                sizes="(max-width: 893px) 375px,
                              894px"
                class="d-block w-100"
                alt="carousel 1 slide"
              />
            </div>

            <div class="carousel-item">
              <img
                src=${img2}
               srcset="${img2} 375w, ${img2Middle} 894w"
                sizes="(max-width: 893px) 375px,
                              894px"
                class="d-block w-100"
                alt="carousel 2 slide"
              />
            </div>

            <div class="carousel-item">
              <img
                src=${img3}
                srcset="${img3} 375w, ${img3Middle} 894w"
                sizes="(max-width: 893px) 375px,
                           894px"
                class="d-block w-100"
                alt="carousel 3 slide"
              />
            </div>

            <div class="carousel-item">
              <img
                src=${img4}
                srcset="${img4} 375w, ${img4Middle} 894w"
                sizes="(max-width: 893px) 375px,
                            894px"
                class="d-block w-100"
                alt="carousel 4 slide"
              />
            </div>

            <div class="carousel-item">
              <img
                src=${img5}
                srcset="${img5} 375w, ${img5Middle} 894w"
                sizes="(max-width: 893px) 375px,
                            894px"
                class="d-block w-100"
                alt="carousel 5 slide"
              />
            </div>

            <div class="carousel-item">
              <img
                src=${img6}
                srcset="${img6} 375w, ${img6Middle} 894w"
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
    `
    );
  }

  connectedCallback() {
    this.render();
  }
}
