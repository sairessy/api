export default class Machina {
  constructor(props) {
    this.id = String(Date.now());
    if (props) {
      for (const prop in props) {
        this[prop] = props[prop];
      }
    }
  }

  set(name, value) {
    this[name] = value;
  }

  remove(name) {
    delete this[name];
  }
}
