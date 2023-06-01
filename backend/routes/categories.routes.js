const express = require("express");

const {
  setCategories,
  getCategories,
  getCategory,
  editCategory,
  deleteCategory,
} = require("../controllers/category.controller");


const router = express.Router();

router.get("/", getCategories);
router.get("/:id", getCategory);
router.post("/", setCategories);
router.put("/:id", editCategory);
router.delete("/:id", deleteCategory);

module.exports = router;