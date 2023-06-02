const express = require("express");

const {
  setResponsables,
  getResponsables,
  getResponsable,
  editResponsable,
  deleteResponsable,
} = require("../controllers/responsable.controller");


const router = express.Router();

router.get("/", getResponsables);
router.get("/:id", getResponsable);
router.post("/", setResponsables);
router.put("/:id", editResponsable);
router.delete("/:id", deleteResponsable);

module.exports = router;