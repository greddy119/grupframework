import {Excellcomponent} from '@core/Excellcomponent';
export class Toolbar extends Excellcomponent {
  static className = 'excell__toolbar';

  constructor($root) {
    super($root, {
      listeners: ['click'],
      name: 'Toolbar',
    });
  }
  onClick(event) {
    console.log('Toolbar click', event);
  }
  toHTML() {
    return `
     <div class="button">
        <span class="material-symbols-outlined">format_bold</span>
      </div>
      <div class="button">
        <span class="material-symbols-outlined">format_italic</span>
      </div>
      <div class="button">
        <span class="material-symbols-outlined">format_align_left</span>
      </div>
      <div class="button">
        <span class="material-symbols-outlined">format_align_center</span>
      </div>
      <div class="button">
        <span class="material-symbols-outlined">format_align_right</span>
      </div>
      <div class="button">
        <span class="material-symbols-outlined">format_align_justify</span>
      </div>
    `;
  }
}
