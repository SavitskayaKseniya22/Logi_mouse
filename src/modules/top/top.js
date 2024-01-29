import './top.scss';

import logo__white from './assets/img__logo_white.png';
import logo__black from './assets/img__logo_black.png';
import img__burger from './assets/img__burger_big.png';
import img__cross from './assets/img__cross_big.png';

export function top() {
  const element = document.createElement('div');

  const topContent = ` 
<header class="top__header">

  <div class="inner top-header__inner">
    <a href="#">
      <img
        class="top-header__logo"
        width="145"
        height="45"
        src="${logo__white}"
        alt="Logitech"
      />
    </a>

    <input type="checkbox" id="toggle" />
    <label for="toggle" class="top-header__button_open">
      <img width="30" height="20" src="${img__burger}" alt="Burger" />
    </label>

    <ul class="top__navigator">
      <li><a href="#wireless">работайте без проводов</a></li>
      <li><a href="#surfaces">где угодно</a></li>
      <li><a href="#devices">с комфортом</a></li>
      <li><a href="#features">с разных устройств</a></li>
      <li><a href="#advantages__elem_comfort">в любое время</a></li>
      <li><a href="#advantages__elem_fast">и еще быстрее</a></li>
    </ul>

    <div class="top-navigator-slide__container">
      <ul class="top__navigator_slide">
        <li><a href="#wireless">без проводов</a></li>
        <li><a href="#surfaces">за любым столом</a></li>
        <li><a href="#devices">одновременно с нескольких устройств</a></li>
        <li><a href="#features">с индивидуальными настройками</a></li>
        <li><a href="#advantages__elem_fast">быстрее, чем когда-либо</a></li>
        <li>
          <a href="#advantages__elem_comfort">
            комфортно. эргономично. интуитивно.
          </a>
        </li>
        <li>
          <label for="toggle" class="top-header__button_close">
            <img width="25" height="25" src="${img__cross}" alt="Cross" />
          </label>
        </li>
      </ul>
    </div>
  </div>
</header>

<div class="top">
  <div class="inner top__inner">
    <a href="#">
      <img
        class="top__logo"
        width="240"
        height="73"
        src="${logo__black}"
        alt="Logitech"
      />
    </a>
    <h2 class="top__title">работайте продуктивнее</h2>
    <p class="inner top__info">
      Создана для эффективной работы, программирования и творчества
    </p>
    <a href="#wireless" class="top__arrow_down"></a>
  </div>
</div>
    `;

  element.insertAdjacentHTML('afterbegin', topContent);
  return element;
}
