import server from "./src/routes/index.js";

const PORT = process.env.PORT;

server.listen(PORT, async () => {
  console.log(`Running on port ${PORT}`);
  console.log("The application is working just fine!");
});
