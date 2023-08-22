import {Excellcomponent} from '@core/Excellcomponent';
import {createTable} from '@/components/Table/table.template';
import {$} from '@core/dom';
export class Table extends Excellcomponent {
  static className = 'excell__table';

  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
      name: 'Table',
    });
  }
  onMousedown(event) {
    const $resizer = $(event.target);
    if (event.target.dataset.resize) {
      // const $parent = $resizer.$el.parentNode; // bad
      // const $parent = $resizer.$el.closest('.column'); // better but bad
      const $parent = $resizer.closest('[data-type = "resizable"]');
      // eslint-disable-next-line no-debugger
      debugger;
      const cell = this.$root.findAll(`[data-col = "${$parent.data.col}"]`);
      const coords = $parent.getCoords();
      document.onmousemove = (event) => {
        const delta = event.pageX - coords.right;
        const alfa = event.pageY - coords.bottom;
        const value = coords.width + delta;
        $parent.$el.style.width = `${value}px`;
        cell.forEach((item)=> {
          item.style.width = `${value}px`;
        });
      };
      document.onmouseup = () => {
        document.onmousemove = null;
      };
    }
  }
  toHTML() {
    return createTable();
  }
}
