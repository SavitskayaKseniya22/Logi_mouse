import './advantages.scss';

export function advantages() {
  const element = document.createElement('section');
  element.className = 'advantages inner';
  element.id = 'advantages';

  const advantagesContent = `

      <div class="advantages__elem" id="advantages__elem_comfort">
        <div class="advantages__text">

          <h2>комфортно. эргономично. интуитивно.</h2>
          <p>
            Дизайн мыши MX Master 3 разработан так, чтобы с точностью повторять
            форму вашей ладони. Но не менее важны колесико прокрутки для
            большого пальца и расположение кнопок жестов, с которыми вы будете
            творить уверенно как никогда.
          </p>

        </div>

        <div class="contain__image contain__image_first"></div>

      </div>

      <div class="advantages__elem">

        <div class="advantages__text" id="advantages__elem_fast">

        

          <h2>быстрее, чем когда-либо</h2>
          <p>
            Компьютерная мышь MX Master 3 предлагает ультимативный механизм
            прокрутки со скоростью 1000 строк за 1 секунду. С точностью до
            пикселя. Бесшумно.
          </p>

        </div>

        <div class="contain__image contain__image_second"></div>

      </div>
    
    `;

  element.insertAdjacentHTML('afterbegin', advantagesContent);
  return element;
}
