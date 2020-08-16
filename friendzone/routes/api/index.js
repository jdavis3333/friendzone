const router = require("express").Router();
const apiRoutes = require("./api");

// Post routes
router.use("/chat", apiRoutes);

module.exports = router;
