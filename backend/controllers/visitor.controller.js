const VisitorModel = require("../models/visitor.model");

module.exports.getVisitors = async (req, res) => {
  const visitors = await VisitorModel.find();
  res.status(200).json(visitors);
};

module.exports.getVisitor = async (req, res) => {
  const visitor =  await VisitorModel.findById(req.params.id);
  res.status(200).json(visitor);
};

module.exports.setVisitors = async (req, res) => {
  if (!req.body.name) {
    res.status(400).json({ message: "Merci de remplir les champs obligatoires" });
  }

  const visitor = await VisitorModel.create({
    name: req.body.name,
    description: req.body.description,
    phone: req.body.phone,
    email: req.body.email,
    wallet_amount: 0,
    is_delete: false,
  });
  res.status(200).json(visitor);
};

module.exports.editVisitor = async (req, res) => {
  const visitor = await VisitorModel.findById(req.params.id);

  if (!visitor) {
    res.status(400).json({ message: "Ce visiteur n'existe pas" });
  }

  const updateVisitor = await VisitorModel.findByIdAndUpdate(visitor, req.body, {
    new: true,
  });

  res.status(200).json(updateVisitor);
};

module.exports.deleteVisitor = async (req, res) => {
  const visitor = await VisitorModel.findById(req.params.id);

  if (!visitor) {
    res.status(400).json({ message: "Ce visiteur n'existe pas" });
  }
  await visitor.deleteOne({ _id: visitor })
  res.status(200).json("Visiteur supprimé " + req.params.id);
};