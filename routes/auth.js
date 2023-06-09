const { registerUser } = require("../controllers/auth");

const router = require("express").Router();

router.post("/api/register", registerUser);
router.get("/api/register", (req, res) => {
  res.send("APi Page");
});

module.exports = router;
