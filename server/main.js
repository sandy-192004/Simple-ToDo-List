const express = require("express");
const cors = require("cors");
const connectDB = require("./db.js"); 
const tasks = require("./route.js");

const app = express();
const PORT = 5000;


app.use(cors());


app.use(express.json());

connectDB();


app.use("/", tasks);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
