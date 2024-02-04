export default class {
  constructor(text = '') {
    this.user = null,
    this.created_at = new Date(),
    this.text = text,
    this.tel = '',
    this.email = '',
    this.removed = false
  }
}