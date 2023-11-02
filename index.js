import server from "./src/routes/index.js";

server.listen(process.env.PORT || 3000, () => {
  console.log("Api working just fine!");
});