require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const router = require("./routes");
const PORT = process.env.PORT || 5500;

app.get("/", (req, res) => {
  res.send("Hello from express");
});

app.use(router);
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
