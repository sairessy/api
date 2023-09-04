export default class Message {
  constructor({ user, text, contact }) {
    this.user = user;
    this.text = text;
    this.contact = contact;
    this.created_at = Date.now();
    this.readen = false;
    this.removed = false;
  }
}
