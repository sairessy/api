import server from "./src/routes/index.js";
// import knex from "./src/services/knex/dev/index.js";

const PORT = process.env.PORT || 3000;

server.listen(PORT, async () => {
  console.log(`Running on port ${PORT}`);
  // try {
  //   const result = await knex("user").insert({
  //     email: `${Date.now()}@gmail.com`,
  //     password: new Date(),
  //   });

  //   console.log(result);
  // } catch (error) {
  //   console.log(error);
  // }
});
