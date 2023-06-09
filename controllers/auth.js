const User = require("../models/user");

exports.registerUser = async (req, res) => {
  res.json("Api Page");
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
};
