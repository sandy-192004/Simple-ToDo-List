const express = require("express");
const cors = require("cors");
const connectDB = require("./db.js"); 
const tasks = require("./route.js");

const app = express();
const PORT = 5000;

// 1️⃣ Enable CORS BEFORE routes
app.use(cors());

// 2️⃣ Parse JSON BEFORE routes
app.use(express.json());

// Connect DB
connectDB();

// 3️⃣ Register routes AFTER middleware
app.use("/", tasks);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
