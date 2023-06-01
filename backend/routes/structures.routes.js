const express = require("express");

const {
  setStructures,
  getStructures,
  editStructure,
  deleteStructure,
} = require("../controllers/structure.controller");


const router = express.Router();

router.get("/", getStructures);
router.post("/", setStructures);
router.put("/:id", editStructure);
router.delete("/:id", deleteStructure);

module.exports = router;