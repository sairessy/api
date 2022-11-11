export default class Photo {
  constructor(modelo, name, empresa, data) {
    this.modelo_id = modelo;
    this.empresa = empresa;
    this.name = Date.now() + "-" + name;
    this.created_at = Date.now();
    this.data = data || null;
  }
}
