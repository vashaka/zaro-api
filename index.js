const express = require("express");
const authRoutes = require("./routes/auth");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});
app.use(authRoutes);

const port = "https://zaro-api.vercel.app/";

app.listen(port, () => {
  mongoose
    .connect(
      "mongodb+srv://vashaka:Data932868@cluster0.3grsihl.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("listening on http://localhost:4000");
    })
    .catch((err) => console.log(err));
});
