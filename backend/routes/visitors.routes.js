const express = require("express");

const {
  setVisitors,
  getVisitors,
  getVisitor,
  editVisitor,
  deleteVisitor,
} = require("../controllers/visitor.controller");


const router = express.Router();

router.get("/", getVisitors);
router.get("/:id", getVisitor);
router.post("/", setVisitors);
router.put("/:id", editVisitor);
router.delete("/:id", deleteVisitor);

module.exports = router;