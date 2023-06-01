const express = require("express");

const {
  setServices,
  getServices,
  getService,
  editService,
  deleteService,
} = require("../controllers/service.controller");


const router = express.Router();

router.get("/", getServices);
router.get("/:id", getService);
router.post("/", setServices);
router.put("/:id", editService);
router.delete("/:id", deleteService);

module.exports = router;