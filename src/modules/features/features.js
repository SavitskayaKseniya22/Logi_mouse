import './features.scss';

import Software from './components/software/software';
import CarouselSoftware from './components/carousel/carousel';

import imgMouse from './assets/img-mouse_main.png';

customElements.define('software-custom', Software, { extends: 'div' });
customElements.define('carousel-software-custom', CarouselSoftware, {
  extends: 'div',
});

export default class Features extends HTMLDivElement {
  constructor() {
    super();
    this.className = 'features';
    this.id = 'features';
  }

  render() {
    this.insertAdjacentHTML(
      'afterbegin',
      `
      <div class="inner features__inner">
        <h2>с индивидуальными настройками</h2>
        <p class="features__info">
          Мышь MX Master 3 адаптируется под ваши рабочие процессы. Благодаря
          индивидуальным настройкам, вы сможете настроить кнопки и жесты
          практически под любое используемое приложение.
        </p>
        <img class="features__image"
          src=${imgMouse}
          width="1171"
          height="698"
          alt="Mouse features"
        /> 
      
      <div is="carousel-software-custom"></div>
      <div is="software-custom"></div>
      </div>
    `
    );
  }

  connectedCallback() {
    this.render();
  }
}
