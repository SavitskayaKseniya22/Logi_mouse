import './carousel.scss';

import img__texture_cloth from '../../assets/img-texture_cloth.png';
import img__texture_glass from '../../assets/img-texture_glass.png';
import img__texture_linoleum from '../../assets/img-texture_linoleum.png';
import img__texture_marble from '../../assets/img-texture_marble.png';
import img__texture_wood from '../../assets/img-texture_wood.png';

import img__cloth from '../../assets/img-cloth.png';
import img__cloth_middle from '../../assets/img-cloth_middle.png';
import img__cloth_big from '../../assets/img-cloth_big.png';

import img__glass from '../../assets/img-glass.png';
import img__glass_middle from '../../assets/img-glass_middle.png';
import img__glass_big from '../../assets/img-glass_big.png';

import img__linoleum from '../../assets/img-linoleum.png';
import img__linoleum_middle from '../../assets/img-linoleum_middle.png';
import img__linoleum_big from '../../assets/img-linoleum_big.png';

import img__marble from '../../assets/img-marble.png';
import img__marble_middle from '../../assets/img-marble_middle.png';
import img__marble_big from '../../assets/img-marble_big.png';

import img__wood from '../../assets/img-wood.png';
import img__wood_middle from '../../assets/img-wood_middle.png';
import img__wood_big from '../../assets/img-wood_big.png';

import img__left from '../../assets/icon-arrow_left.png';
import img__right from '../../assets/icon-arrow_right.png';

export function carousel() {
  const element = document.createElement('div');
  element.className = 'carousel slide surfaces__carousel';
  element.id = 'surfaces__carousel';

  const carouselContent = `
      <div
        id="surfaces__carousel"
        class="carousel slide surfaces__carousel"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src=${img__cloth}
              srcset="
                ${img__cloth}        375w,
                ${img__cloth_middle}  894w,
                ${img__cloth_big}    1280w
              "
              sizes="(max-width: 893px) 375px,
                             (max-width: 1279px) 894px,
                             1280px"
              class="d-block w-100"
              alt="Cloth"
            />
          </div>
          <div class="carousel-item">
            <img
              src=${img__glass}
              srcset="
                ${img__glass}        375w,
                ${img__glass_middle}  894w,
                ${img__glass_big}    1280w
              "
              sizes="(max-width: 893px) 375px,
                           (max-width: 1279px) 894px,
                           1280px"
              class="d-block w-100"
              alt="Glass"
            />
          </div>

          <div class="carousel-item">
            <img
              src=${img__linoleum}
              srcset="
                ${img__linoleum}        375w,
                ${img__linoleum_middle}  894w,
                ${img__linoleum_big}    1280w
              "
              sizes="(max-width: 893px) 375px,
                    (max-width: 1279px) 894px,
                    1280px"
              class="d-block w-100"
              alt="Linoleum"
            />
          </div>
          <div class="carousel-item">
            <img
              src=${img__marble}
              srcset="
                ${img__marble}        375w,
                ${img__marble_middle}  894w,
                ${img__marble_big}    1280w
              "
              sizes="(max-width: 893px) 375px,
                           (max-width: 1279px) 894px,
                           1280px"
              class="d-block w-100"
              alt="Marble"
            />
          </div>
          <div class="carousel-item">
            <img
              src=${img__wood}
              srcset="
                ${img__wood}        375w,
                ${img__wood_middle}  894w,
                ${img__wood_big}    1280w
              "
              sizes="(max-width: 893px) 375px,
                    (max-width: 1279px) 894px,
                    1280px"
              class="d-block w-100"
              alt="Wood"
            />
          </div>
        </div>
        <b>Переключите поверхность</b>
        <div class="carousel__container">
          <button
            class="carousel-control-prev carousel-control"
            type="button"
            data-bs-target="#surfaces__carousel"
            data-bs-slide="prev"
          >
            <img src=${img__left} alt="Left" width="13" height="21">
          </button>

          <div class="surfaces__carousel-indicators">
            <button
              type="button"
              data-bs-target="#surfaces__carousel"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            >
            <img src=${img__texture_cloth} alt="Cloth" width="30" height="30">
            </button>
            <button
              type="button"
              data-bs-target="#surfaces__carousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            >
             <img src=${img__texture_glass} alt="Glass" width="30" height="30">
            </button>
            <button
              type="button"
              data-bs-target="#surfaces__carousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            >
            <img src=${img__texture_linoleum} alt="Linoleum" width="30" height="30">
            </button>
            <button
              type="button"
              data-bs-target="#surfaces__carousel"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            >
             <img src=${img__texture_marble} alt="Marble" width="30" height="30">
            </button>
            <button
              type="button"
              data-bs-target="#surfaces__carousel"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            >
             <img src=${img__texture_wood} alt="Wood" width="30" height="30">
            </button>
          </div>
          <button
            class="carousel-control-next carousel-control"
            type="button"
            data-bs-target="#surfaces__carousel"
            data-bs-slide="next"
          >
              <img src=${img__right} alt="Left" width="13" height="21">
          </button>
        </div>
      </div>
    `;

  element.insertAdjacentHTML('afterbegin', carouselContent);
  return element;
}
