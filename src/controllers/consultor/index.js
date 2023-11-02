export const all = (req, res) => {
  db.find({}, (err, _docs) => {
    db_consultores.find({}, (err, consultores) => {
      const docs = _docs.filter(({ _id }) =>
        consultores.map(({ user }) => user).includes(_id)
      );

      res.json(
        docs.map(({ _id }) => ({
          _id,
          name: consultores.find(({ user }) => user == _id).name,
          course: consultores.find(({ user }) => user == _id).course,
          price: consultores.find(({ user }) => user == _id).price,
          tel: consultores.find(({ user }) => user == _id).tel,
          desc: consultores.find(({ user }) => user == _id).desc,
        }))
      );
    });
  });
};

export const categorie = (req, res) => {
  db.find({}, (err, _docs) => {
    db_consultores.find({ course: req.params.course }, (err, consultores) => {
      const docs = _docs.filter(({ _id }) =>
        consultores.map(({ user }) => user).includes(_id)
      );

      res.json(
        docs.map(({ _id }) => ({
          _id,
          name: consultores.find(({ user }) => user == _id).name,
          course: consultores.find(({ user }) => user == _id).course,
          price: consultores.find(({ user }) => user == _id).price,
          tel: consultores.find(({ user }) => user == _id).tel,
          desc: consultores.find(({ user }) => user == _id).desc,
        }))
      );
    });
  });
};

export const update = (req, res) => {
  const { price, name, id, course, tel, desc } = req.body;

  db_consultores.findOne({ user: id }, (err, doc) => {
    if (doc === null) {
      db_consultores.insert(
        { name, price, course, tel, desc, user: id },
        (err, doc) => {
          res.json(doc);
        }
      );
    } else {
      db_consultores.update(
        { user: id },
        { $set: { name, price, course, tel, desc } },
        (err, num) => {
          res.json({ success: num > 0 });
        }
      );
    }
  });
};

export const find = (req, res) => {
  db_consultores.findOne({ user: req.params.id }, (err, doc) => {
    res.json(doc);
  });
};