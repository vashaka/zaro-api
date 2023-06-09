const { registerUser } = require("../controllers/auth");

const router = require("express").Router();

router.get("/api", (req, res) => {
  res.send("APi Page");
});
router.post("/api/register", registerUser);

module.exports = router;
