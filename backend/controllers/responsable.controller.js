const ResponsableModel = require("../models/responsable.model");

module.exports.getResponsables = async (req, res) => {
  const responsables = await ResponsableModel.find();
  res.status(200).json(responsables);
};

module.exports.getResponsable = async (req, res) => {
  const responsable =  await ResponsableModel.findById(req.params.id);
  res.status(200).json(responsable);
};

module.exports.setResponsables = async (req, res) => {
  if (!req.body.name) {
    res.status(400).json({ message: "Merci de remplir les champs obligatoires" });
  }

  const responsable = await ResponsableModel.create({
    name: req.body.name,
    description: req.body.description,
    phone: req.body.phone,
    email: req.body.email,
    structure_id: req.body.structure_id,
    is_delete: false,
  });
  res.status(200).json(responsable);
};

module.exports.editResponsable = async (req, res) => {
  const responsable = await ResponsableModel.findById(req.params.id);

  if (!responsable) {
    res.status(400).json({ message: "Ce responsable n'existe pas" });
  }

  const updateResponsable = await ResponsableModel.findByIdAndUpdate(responsable, req.body, {
    new: true,
  });

  res.status(200).json(updateResponsable);
};

module.exports.deleteResponsable = async (req, res) => {
  const responsable = await ResponsableModel.findById(req.params.id);

  if (!responsable) {
    res.status(400).json({ message: "Ce responsable n'existe pas" });
  }
  await responsable.deleteOne({ _id: responsable })
  res.status(200).json("Responsable supprimé " + req.params.id);
};