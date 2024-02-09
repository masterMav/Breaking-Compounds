const express = require("express");
const router = express.Router();
const compoundController = require("../controller/compoundController");

router.get('/all', compoundController.getAll);
router.get("/:id", compoundController.getById);
router.post("/create", compoundController.addToDB);
router.put("/:id", compoundController.updateById);
router.delete("/:id", compoundController.deleteById);

module.exports = router;
