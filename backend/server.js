const app = require("./src/app");

// connect to database
const connectDB = require("./src/db/db");
connectDB();
app.listen(9000, () => {
  console.log("Server is running on port 9000");
});

