import server from "./src/routes/index.js";
import colors from "colors";


const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(colors.bold.gray(`API running on port ${PORT}`));
});
