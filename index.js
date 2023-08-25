import server from "./src/routes/index.js";

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`Api working just fine!`);
});
