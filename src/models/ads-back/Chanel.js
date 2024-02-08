export default class Chanel {
  constructor(title, created_by, type) {
    this.title = title;
    this.created_at = new Date();
    this.created_by = created_by;
    this.type = type;
    this.removed = false;
  }