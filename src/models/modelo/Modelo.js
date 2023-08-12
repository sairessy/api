export default class Modelo {
  constructor(full_name, birthday, age, address, gender, empresa) {
    this.full_name = full_name;
    this.birthday = birthday || null;
    this.empresa = empresa;
    this.gender = gender || "f";
    this.age = age || "1";
    this.address = address || "";
    this.created_at = Date.now();
    this.deactivated = false;
    this.height = null;
    this.removed = false;
  }
}
