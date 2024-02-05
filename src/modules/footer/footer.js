import './footer.scss';

export default class Footer extends HTMLDivElement {
  constructor() {
    super();
    this.className = 'footer';
    this.id = 'footer';
  }

  render() {
    this.insertAdjacentHTML(
      'afterbegin',
      `
      <div class="inner">
        <p>
          Copyright © 2021 Logitech
          <br />
          Все права защищены
        </p>
      </div>
    `
    );
  }

  connectedCallback() {
    this.render();
  }
}
