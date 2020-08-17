const router = require("express").Router();
const apiRoutes = require("./chat");

// Post routes
router.use("/chat", apiRoutes);

module.exports = router;
