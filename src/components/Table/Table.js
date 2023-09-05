import {Excellcomponent} from '@core/Excellcomponent';
import {createTable} from '@/components/Table/table.template';
import {tableResize} from '@/components/Table/table.resize';
import {TableSelection} from '@/components/Table/TableSelection';
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

  prepare() {
    console.log('prepare');
  }

  init() {
    super.init();
    this.selection = new TableSelection();
    const $cell = this.$root.find('[data-id="2:1"]');
    this.selection.select($cell);
    console.log('init');
  }
}
