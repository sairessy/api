import server from "./src/routes/index.js";

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Api working just fine!`);
});
