import {capitalize} from '@core/utiles';

export class Domlistener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('Nu exista root pentru domlistener');
    }
    this.$root = $root;
    this.listeners = listeners;
  }
  initDomListener() {
    console.log(this.listeners);
    this.$root.on();
    this.listeners.forEach((listener)=>{
      const method = 'on' + capitalize(listener);
      if (!this[method]) {
        const name = this.name;
        console.log(name);
        throw new Error(`
        Metoda ${method} nu este implementata in ${name} component
        `);
      }
      this.$root.on(listener, this[method].bind(this));
    });
  }
  removeDomListener() {
    this.listeners.forEach((listener)=>{
      const method = 'off' + capitalize(listener);
      this.$root.off(listener, this[method].bind(listener));
    });
  }
}
