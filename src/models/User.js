class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
    this.recovery_code = String(Math.random()).substring(2, 7);
    this.created_at = Date.now();
  }
}

export default User;
