import './devices.scss';

export function devices() {
  const element = document.createElement('section');
  element.className = 'devices';
  element.id = 'devices';

  const devicesContent = `
      <div class="inner devices__inner">
        <h2>одновременно с нескольких устройств</h2>
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
    
    `;

  element.insertAdjacentHTML('afterbegin', devicesContent);
  return element;
}
