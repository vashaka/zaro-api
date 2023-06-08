const { registerUser } = require("../controllers/auth");

const router = require("express").Router();

router.post("/api/register", registerUser);

module.exports = router;
