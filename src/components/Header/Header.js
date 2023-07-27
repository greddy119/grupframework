import {Excellcomponent} from '@core/Excellcomponent';
export class Header extends Excellcomponent {
  static className = 'excell__header';
  constructor($root) {
    super($root, {
      listeners: ['click', 'input'],
      name: 'Header',
    });
  }
  onClick(event) {
    console.log('Header click', event);
  }
  onInput(event) {
    console.log('Header input', event);
  }
  toHTML() {
    return `
    <input type="text" class="input" value="Table Name">
      <div>
        <div class="button">
          <span class="material-symbols-outlined">delete</span>
        </div>
        <div class="button">
          <span class="material-symbols-outlined">exit_to_app</span>
        </div>
      </div>`;
  }
}
