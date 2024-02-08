export default class AD {
  constructor(title, created_by, chanels, file_url, num_days) {
    this.title = title;
    this.created_at = new Date();
    this.created_by = created_by;
    this.aproved = null;
    this.payed = false;
    this.chanels = chanels;
    this.file_url = file_url;
    this.num_days = num_days;
    this.removed = false;
  }