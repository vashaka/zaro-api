const express = require("express");
const authRoutes = require("./routes/auth");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); // Replace with the domain of your frontend application
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});
app.use(authRoutes);

const port = 4000 || "https://zaro-api.vercel.app/";

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
