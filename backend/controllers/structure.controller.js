const StructureModel = require("../models/structure.model");

module.exports.getStructures = async (req, res) => {
  const structures = await StructureModel.find();
  res.status(200).json(structures);
};

module.exports.setStructures = async (req, res) => {
  if (!req.body.name) {
    res.status(400).json({ message: "Merci de remplir les champs obligatoires" });
  }

  const structure = await StructureModel.create({
    name: req.body.name,
    description: req.body.description,
    location: req.body.location,
    phone: req.body.phone,
    email: req.body.email,
    wallet_amount: 0,
    is_delete: false,
    // categories_ids: req.body.categories_ids,
  });
  res.status(200).json(structure);
};

module.exports.editStructure = async (req, res) => {
  const structure = await StructureModel.findById(req.params.id);

  if (!structure) {
    res.status(400).json({ message: "Cette structure n'existe pas" });
  }

  const updateStructure = await StructureModel.findByIdAndUpdate(structure, req.body, {
    new: true,
  });

  res.status(200).json(updateStructure);
};

module.exports.deleteStructure = async (req, res) => {
  const structure = await StructureModel.findById(req.params.id);

  if (!structure) {
    res.status(400).json({ message: "Cette structure n'existe pas" });
  }
  await structure.deleteOne({ _id: structure })
  res.status(200).json("Structure supprimée " + req.params.id);
};