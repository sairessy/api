export default class Light {
  constructor(owner, name, id) {
    this.id = id;
    this.def_name = "light";
    this.on = false;
    this.name = name;
    this.owner = owner || null;
    this.created_at = Date.now();
    this.removed = false;
  }
}
