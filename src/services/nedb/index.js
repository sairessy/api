import Datastore from "nedb";

const db = {
  user: {
    users: new Datastore("./src/services/nedb/collections/user/users.db"),
  },
  log: {
    logs: new Datastore('./src/services/nedb/collections/log/logs.db')
  },
  feedback: {
    feedbacks: new Datastore('./src/services/nedb/collections/feedback/feedbacks.db')
  },
  machina: {
    machinas: new Datastore('./src/services/nedb/collections/machina/machinas.db')
  },
  gestor: {
    // sales
    sales: new Datastore('./src/services/nedb/collections/gestor/sales/sales.db'),
    sales_category: new Datastore('./src/services/nedb/collections/gestor/sales/sales_category.db'),
    sales_products: new Datastore('./src/services/nedb/collections/gestor/sales/products.db')
  },
  notify: {
    clients: new Datastore('./src/services/nedb/collections/notify/clients.db'),
    clients_cat:  new Datastore('./src/services/nedb/collections/notify/clients_cat.db')
  },
  tecnico: {
    tecnicos: new Datastore('./src/services/nedb/collections/tecnico/tecnicos.db'),
  },
  exchange: {
    products: new Datastore('./src/services/nedb/collections/exchange/products.db'),
  },
  truck: {
    transportations: new Datastore('./src/services/nedb/collections/transportation/transportations.db'),
  }
};

for (const app in db) {
  for (const col_name in db[app]) {
    db[app][col_name].loadDatabase();
  }
}

export default db;