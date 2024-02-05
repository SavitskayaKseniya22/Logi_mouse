import './carousel.scss';

import imgTextureCloth from '../../assets/img-texture_cloth.png';
import imgTextureGlass from '../../assets/img-texture_glass.png';
import imgTextureLinoleum from '../../assets/img-texture_linoleum.png';
import imgTextureMarble from '../../assets/img-texture_marble.png';
import imgTextureWood from '../../assets/img-texture_wood.png';

import imgCloth from '../../assets/img-cloth.png';
import imgClothMiddle from '../../assets/img-cloth_middle.png';
import imgClothBig from '../../assets/img-cloth_big.png';

import imgGlass from '../../assets/img-glass.png';
import imgGlassMiddle from '../../assets/img-glass_middle.png';
import imgGlassBig from '../../assets/img-glass_big.png';

import imgLinoleum from '../../assets/img-linoleum.png';
import imgLinoleumMiddle from '../../assets/img-linoleum_middle.png';
import imgLinoleumBig from '../../assets/img-linoleum_big.png';

import imgMarble from '../../assets/img-marble.png';
import imgMarbleMiddle from '../../assets/img-marble_middle.png';
import imgMarbleBig from '../../assets/img-marble_big.png';

import imgWood from '../../assets/img-wood.png';
import imgWoodMiddle from '../../assets/img-wood_middle.png';
import imgWoodBig from '../../assets/img-wood_big.png';

import imgLeft from '../../assets/icon-arrow_left.png';
import imgRight from '../../assets/icon-arrow_right.png';

export default class CarouselSurfaces extends HTMLDivElement {
  constructor() {
    super();
    this.className = 'carousel slide surfaces__carousel';
    this.id = 'surfaces__carousel';
    this['data-bs-ride'] = 'carousel';
  }

  render() {
    this.insertAdjacentHTML(
      'afterbegin',
      `
      <div class="carousel-inner">
    <div class="carousel-item active">
      <img
        src="${imgCloth}"
        srcset="
          ${imgCloth}         375w,
          ${imgClothMiddle}  894w,
          ${imgClothBig}    1280w
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
        src="${imgGlass}"
        srcset="
          ${imgGlass}         375w,
          ${imgGlassMiddle}  894w,
          ${imgGlassBig}    1280w
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
        src="${imgLinoleum}"
        srcset="
          ${imgLinoleum}         375w,
          ${imgLinoleumMiddle}  894w,
          ${imgLinoleumBig}    1280w
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
        src="${imgMarble}"
        srcset="
          ${imgMarble}         375w,
          ${imgMarbleMiddle}  894w,
          ${imgMarbleBig}    1280w
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
        src="${imgWood}"
        srcset="
          ${imgWood}         375w,
          ${imgWoodMiddle}  894w,
          ${imgWoodBig}    1280w
        "
        sizes="(max-width: 893px) 375px,
                    (max-width: 1279px) 894px,
                    1280px"
        class="d-block w-100"
        alt="Wood"
      />
    </div>
  </div>

  <b  class="surfaces__carousel-title">Переключите поверхность</b>

  <div class="surfaces__carousel-controls">
    <button
      class="carousel-control-prev carousel-control"
      type="button"
      data-bs-target="#surfaces__carousel"
      data-bs-slide="prev"
    >
      <img src="${imgLeft}" alt="Left" width="13" height="21" class="surfaces__carousel-control_left" />
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
        <img src="${imgTextureCloth}" alt="Cloth" width="30" height="30" />
      </button>

      <button
        type="button"
        data-bs-target="#surfaces__carousel"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      >
        <img src="${imgTextureGlass}" alt="Glass" width="30" height="30" />
      </button>

      <button
        type="button"
        data-bs-target="#surfaces__carousel"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      >
        <img
          src="${imgTextureLinoleum}"
          alt="Linoleum"
          width="30"
          height="30"
        />
      </button>

      <button
        type="button"
        data-bs-target="#surfaces__carousel"
        data-bs-slide-to="3"
        aria-label="Slide 4"
      >
        <img src="${imgTextureMarble}" alt="Marble" width="30" height="30" />
      </button>

      <button
        type="button"
        data-bs-target="#surfaces__carousel"
        data-bs-slide-to="4"
        aria-label="Slide 5"
      >
        <img src="${imgTextureWood}" alt="Wood" width="30" height="30" />
      </button>

    </div>

    <button
      class="carousel-control-next carousel-control"
      type="button"
      data-bs-target="#surfaces__carousel"
      data-bs-slide="next"
    >
      <img src="${imgRight}" alt="Left" width="13" height="21" class="surfaces__carousel-control_right" />
    </button>

  </div>
    `
    );
  }

  connectedCallback() {
    this.render();
  }
}
