import knex from "../../services/knex/main/index.js";

export const create = async (req, res) => {
  const { text, user_id } = req.body;

  if (user_id === null) {
    res.status(500).json({ msg: "Erro de autenticação" });
  } else {
    await knex("though").insert({
      text,
      user_id,
      created_at: new Date(),
    });
    res.json({});
  }
};

export const like = async (req, res) => {
  const { id, user } = req.body;

  const result = await knex("post-liker").where({
    post_id: id,
    user_id: user,
    removed: false,
  });

  if (result.length === 0) {
    await knex("post-liker").insert({
      user_id: user,
      post_id: id,
      created_at: new Date(),
    });
    res.json({ liked: true });
  } else {
    await knex("post-liker")
      .update({ removed: true })
      .where({ post_id: id, user_id: user });
    res.json({ liked: false });
  }
};

export const unlike = async (req, res) => {
  const { id, user } = req.body;

  const result = await knex("post-unliker").where({
    post_id: id,
    user_id: user,
    removed: false,
  });

  if (result.length === 0) {
    await knex("post-unliker").insert({
      user_id: user,
      post_id: id,
      created_at: new Date(),
    });
    res.json({ liked: true });
  } else {
    await knex("post-unliker")
      .update({ removed: true })
      .where({ post_id: id, user_id: user });
    res.json({ liked: false });
  }
};

export const all = async (req, res) => {
  const rx = await knex.raw(
    `
      SELECT 
        th.id AS id, 
        u.id AS user_id, 
        text, 
        created_at, 
        email, 
        full_name
      FROM though AS th 
      JOIN user AS u 
      ON th.user_id = u.id
      ORDER BY th.id DESC
    `
  );

  const r = rx[0];

  for (let i = 0; i < r.length; i++) {
    const x = await knex("post-liker").where({
      post_id: r[i].id,
      removed: false,
    });

    const y = await knex("post-unliker").where({
      post_id: r[i].id,
      removed: false,
    });

    const z = await knex("share").where({
      post_id: r[i].id,
      removed: false,
    });

    r[i].likes = x.length;
    r[i].unlikes = y.length;
    r[i].shares = z.length;
    r[i].comments = await knex("comment").where({
      post_id: r[i].id,
      removed: false,
    });
  }

  // const result = await knex("though").orderBy("id", "desc");
  const result = r;
  res.json(result);
};

export const comment = async (req, res) => {
  const { user_id, text, post_id } = req.body;

  await knex("comment").insert({
    user_id,
    post_id,
    text,
    created_at: new Date(),
  });

  res.json({});
};

export const share = async (req, res) => {
  const { id, user } = req.body;

  const result = await knex("share").where({
    user_id: user,
    post_id: id,
    removed: false,
  });

  if (result.length > 0) {
    res.json({ msg: "Já partilhado" });
  } else {
    await knex("share").insert({
      post_id: id,
      user_id: user,
      created_at: new Date(),
    });
    res.json({ msg: "Partilhado com sucesso" });
  }
};

export const _delete = async (req, res) => {
  const id = req.params.id;
  const result = await knex("pfl_document")
    .update({ removed: true })
    .where({ id });
  res.json({ data: result });
};

export const update = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  const result = await knex("pfl_document").update(data).where({ id });
  res.json({ data: result });
};
