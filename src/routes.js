const express = require("express");
const router = express.Router();

const OwnerController = require("./Controllers/OwnerController");
const EnterpriceController = require("./Controllers/EnterpriseController");

router
  //Owner Routes
  .get("/owner", OwnerController.index)
  .post("/owner", OwnerController.store)
  .put("/owner/:id", OwnerController.update)
  .delete("/owner/:id", OwnerController.delete)

  //Enterprise Routes
  .post("/enterprise", EnterpriceController.store)
  .get("/enterprise", EnterpriceController.index)
  .put("/enterprise/:id", EnterpriceController.update)
  .delete("/enterprise/:id", EnterpriceController.delete);

module.exports = router;
