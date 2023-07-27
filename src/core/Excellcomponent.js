import {Domlistener} from '@core/Domlistener';
export class Excellcomponent extends Domlistener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
  }
  toHTML() {
    return '';
  }
  init() {
    (this.initDomListener());
  }
  destroy() {
    (this.removeDomListener());
  }
}
