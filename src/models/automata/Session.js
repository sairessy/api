export default class Session {
  constructor(id, user_id) {
    this._id = id;
    this.user_id = user_id;
    this.expirity = Date.now() + 1000 * 60 * 60;
  }
}
