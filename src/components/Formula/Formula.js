import {Excellcomponent} from '@core/Excellcomponent';
export class Formula extends Excellcomponent {
  static className = 'excell__formule';

  constructor($root) {
    super($root, {
      listeners: ['click', 'input'],
      name: 'Formula',
    });
  }
  onClick(event) {
    console.log('Formula click', event);
  }
  onInput(event) {
    console.log('Formula input', event);
  }
  toHTML() {
    return `
          <div class="info"> FX </div>
      <div class="input" contenteditable="true" spellcheck="false"></div>
    `;
  }
}
