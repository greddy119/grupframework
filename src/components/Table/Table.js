import {Excellcomponent} from '@core/Excellcomponent';
import {createTable} from '@/components/Table/table.template';
import {tableResize} from '@/components/Table/table.resize';
export class Table extends Excellcomponent {
  static className = 'excell__table';

  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
      name: 'Table',
    });
  }
  onMousedown(event, $root = this.$root) {
    tableResize(event, $root);
  }
  toHTML() {
    return createTable();
  }
}
