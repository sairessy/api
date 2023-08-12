export default class User {
  construtor(email, pass) {
    this.token = "";
    this.email = email;
    this.pass = pass;
    this.recovery_code = String(Math.random()).substring(2, 7);
    this.created_at = new Date();
    this.updated_at = new Date();
    this.email_verified = false;
  }
}
