import {Domlistener} from '@core/Domlistener';
export class Excellcomponent extends Domlistener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.prepare();
  }
  toHTML() {
    return '';
  }
  prepare() {

  }
  init() {
    (this.initDomListener());
  }
  destroy() {
    (this.removeDomListener());
  }
}
