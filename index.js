import server from "./src/routes/index.js";
import colors from "colors";

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`${colors.bold.cyan('[✓]')} API working just fine!`);
});