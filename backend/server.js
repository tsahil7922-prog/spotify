const app = require("./src/app");

// connect to database
const connectDB = require("./src/db/db");
connectDB();
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

