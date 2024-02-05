import './surfaces.scss';
import CarouselSurfaces from './components/carousel/carousel';

customElements.define('carousel-surfaces-custom', CarouselSurfaces, {
  extends: 'div',
});

export default class Surfaces extends HTMLDivElement {
  constructor() {
    super();
    this.className = 'surfaces inner';
    this.id = 'surfaces';
  }

  render() {
    this.insertAdjacentHTML(
      'afterbegin',
      `
      <h2>за любым столом</h2>
      <p class="surfaces__info surfaces__info_top">
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
        <div is="carousel-surfaces-custom"></div>
      <p class="surfaces__info">
        Благодаря технологии Logitech Darkfierd, MX Master 3 работает на любой
        поверхности, даже на стекле.
      </p>
    `
    );
  }

  connectedCallback() {
    this.render();
  }
}
