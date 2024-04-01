class User {
  constructor(email, pass, app = '') {
    this.email = email;
    this.pass = pass;
    this.recovery_code = String(Math.random()).substring(2, 7);
    this.created_at = Date.now();
    this.app = app;
    author: ''
  }
}

export default User;