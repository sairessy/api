export default class Camera {
  constructor(owner, name, id) {
    this.id = id;
    this.def_name = "camera";
    this.name = name;
    this.owner = owner;
    this.created_at = Date.now();
    this.removed = false;
  }
}
