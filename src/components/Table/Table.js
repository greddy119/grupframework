import {Excellcomponent} from '@core/Excellcomponent';
export class Table extends Excellcomponent {
  static className = 'excell__table';

  constructor($root) {
    super($root, {
      listeners: ['click', 'input'],
      name: 'Table',
    });
  }
  onClick(event) {
    console.log('Table click', event);
  }
  onInput(event) {
    console.log('input', event);
  }
  toHTML() {
    return `
    <div class="row">
        <div class="row-info">
        </div>
        <div class="row-data">
          <div class="column">A</div>
          <div class="column">B</div>
          <div class="column">C</div>
          <div class="column">D</div>
          <div class="column">E</div>
          <div class="column">F</div>
          <div class="column">G</div>
          <div class="column">H</div>
          <div class="column">I</div>
          <div class="column">J</div>
          <div class="column">K</div>
          <div class="column">L</div>
          <div class="column">M</div>
          <div class="column">N</div>
          <div class="column">O</div>
          <div class="column">P</div>
          <div class="column">Q</div>
          <div class="column">R</div>
          <div class="column">S</div>
        </div>
      </div>
      <div class="row">
        <div class="row-info">
          1
        </div>
        <div class="row-data">
          <div class="cell selected" contenteditable="true">Z1</div>
          <div class="cell">X1</div>
          <div class="cell">W1</div>
        </div>
      </div>`;
  }
}
