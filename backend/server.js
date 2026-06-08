const app = require("./src/app");
const connwectDB = require("./src/db/db");
connwectDB();
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

