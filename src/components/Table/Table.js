import {Excellcomponent} from '@core/Excellcomponent';
import {createTable} from '@/components/Table/table.template';
export class Table extends Excellcomponent {
  static className = 'excell__table';

  constructor($root) {
    super($root, {
      listeners: ['mousedown', 'mousemove', 'mouseup'],
      name: 'Table',
    });
  }
  onMousedown(event) {
    console.log('MouseDown', event);
  }
  onMousemove(event) {
    console.log('Mousemove', event);
  }
  onMouseup(event) {
    console.log('Mouseup', event);
  }

  toHTML() {
    return createTable();
  }
}
