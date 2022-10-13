export default class Bell {
  constructor(owner, name, id) {
    this.id = id;
    this.def_name = "bell";
    this.name = name;
    this.owner = owner;
    this.created_at = Date.now();
    this.removed = false;
  }
}
