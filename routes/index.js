const express = require("express");
const router = express.Router();
const controllers = require('../controllers');

router.get("/", controllers.getIndex);
router.post("/", controllers.getLocationDegreesController);
router.post("/current", controllers.getComputerLocationDegreesController);

module.exports = router;
