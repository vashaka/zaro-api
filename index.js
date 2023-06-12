const express = require("express");
const authRoutes = require("./routes/auth");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user");

// app.use((req, res, next) => {
//   res.setHeader(
//     "Access-Control-Allow-Origin",
//     "https://zaro-client.vercel.app"
//   );
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   next();
// });

app.use(
  cors({
    credentials: true,
    origin: "https://zaro-client.vercel.app", // Replace with the domain of your frontend application
  })
);
app.use(express.json());

app.get("/", function (req, res) {
  res.send("OKK");
});

app.post("/", async (req, res) => {
  console.log("OKK");
  const { email, password } = req.body;

  try {
    const userDoc = await User.create({
      email,
      password,
    });
    console.log(userDoc);
    res.status(200).json(userDoc);
  } catch (err) {
    console.log(err);
  }
});

// app.get("/", (req, res) => {
//   res.send("Hello");
// });

// app.use(authRoutes);

const port = "https://zaro-api.vercel.app/";

app.listen(port, () => {
  mongoose
    .connect(
      "mongodb+srv://vashaka:Data932868@cluster0.3grsihl.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("listening on " + port);
    })
    .catch((err) => console.log(err));
});
