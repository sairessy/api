import server from "./src/routes/index.js";

const PORT = process.env.PORT || 3000;

server.listen(PORT, async () => {
  console.log(`Running on port ${PORT}`);
});
