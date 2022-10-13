export default class Tracker {
  constructor(owner, name, id) {
    this.id = id;
    this.def_name = "tracker";
    this.on = false;
    this.name = name;
    this.owner = owner || null;
    this.created_at = Date.now();
    this.removed = false;
    this.last_position = {
      lat: 0,
      lon: 0,
    };
  }
}
