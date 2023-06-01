const CategoryModel = require("../models/category.model");

module.exports.getCategories = async (req, res) => {
  const categories = await CategoryModel.find();
  res.status(200).json(categories);
};

module.exports.getCategory = async (req, res) => {
  const category =  await CategoryModel.findById(req.params.id);
  res.status(200).json(category);
};

module.exports.setCategories = async (req, res) => {
  if (!req.body.name) {
    res.status(400).json({ message: "Merci de remplir les champs obligatoires" });
  }

  const category = await CategoryModel.create({
    name: req.body.name,
    description: req.body.description,
    is_delete: false,
  });
  res.status(200).json(category);
};

module.exports.editCategory = async (req, res) => {
  const category = await CategoryModel.findById(req.params.id);

  if (!category) {
    res.status(400).json({ message: "Cette catégorie n'existe pas" });
  }

  const updateCategory = await CategoryModel.findByIdAndUpdate(category, req.body, {
    new: true,
  });

  res.status(200).json(updateCategory);
};

module.exports.deleteCategory = async (req, res) => {
  const category = await CategoryModel.findById(req.params.id);

  if (!category) {
    res.status(400).json({ message: "Cette catégorie n'existe pas" });
  }
  await category.deleteOne({ _id: category })
  res.status(200).json("Catégorie supprimée " + req.params.id);
};