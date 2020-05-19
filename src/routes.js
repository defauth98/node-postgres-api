const express = require("express");
const router = express.Router();

const OwnerController = require("./Controllers/OwnerController");

router.get("/owner", OwnerController.index);
router.post("/owner", OwnerController.store);
router.put("/owner/:id", OwnerController.update);
router.delete("/owner/:id", OwnerController.delete);
module.exports = router;
