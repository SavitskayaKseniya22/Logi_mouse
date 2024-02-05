import './devices.scss';

export default class Devices extends HTMLDivElement {
  constructor() {
    super();
    this.className = 'devices';
    this.id = 'devices';
  }

  render() {
    this.insertAdjacentHTML(
      'afterbegin',
      `
      <div class="inner devices__inner">
        <h2>одновременно с нескольких <br> устройств</h2>
        <ul class="devices_info">
          <li> С технологией Flow вы сможете работать одновременно на нескольких
          компьютерах, мгновенно переключаясь между разными операционными
          системами — даже между Windows® и macOS. Например, достаточно
          скопировать текст, изображение или файл на MacBook и переместить его
          на Windows PC без задержек.</li>
          <li>Клавиатура MX Keys отслеживает перемещение курсора мыши MX Master 3,
          благодаря чему ваш текст появится там, где вы работаете в текущий
          момент.</li>
        </ul>
        <ul class="devices_steps">
          <li>1. Нажмите и удерживайте папку, чтобы переместить её</li>
          <li>2. Перенесите папку на любой из соседних экранов</li>
          <li>3. Да, всё так просто!</li>
        </ul>
      </div>
    `
    );
  }

  connectedCallback() {
    this.render();
  }
}
