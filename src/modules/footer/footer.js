import './footer.scss';

export function footer() {
  const element = document.createElement('footer');
  element.className = 'footer';
  element.id = 'footer';

  const footerContent = `
      <div class="inner">
        <p>
          Copyright © 2021 Logitech
          <br />
          Все права защищены
        </p>
      </div>
    `;

  element.insertAdjacentHTML('afterbegin', footerContent);
  return element;
}
