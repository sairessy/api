export default class Machina {
  constructor(props) {
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
