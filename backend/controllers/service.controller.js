const ServiceModel = require("../models/service.model");

module.exports.getServices = async (req, res) => {
  const services = await ServiceModel.find();
  res.status(200).json(services);
};

module.exports.getService = async (req, res) => {
  const service =  await ServiceModel.findById(req.params.id);
  res.status(200).json(service);
};

module.exports.setServices = async (req, res) => {
  if (!req.body.name || !req.body.opening_time_1 || !req.body.closing_time_1) {
    res.status(400).json({ message: "Merci de remplir les champs obligatoires" });
  }

  const service = await ServiceModel.create({
    name: req.body.name,
    description: req.body.description,
    nb_posts: req.body.nb_posts,
    average_time_per_meet: req.body.average_time_per_meet,
    opening_time_1: req.body.opening_time_1,
    closing_time_1: req.body.closing_time_1,
    opening_time_2: req.body.opening_time_2,
    closing_time_2: req.body.opening_time_2,
    responsable_id: req.body.responsable_id,
    structure_id: req.body.structure_id,
    is_delete: false,
  });
  res.status(200).json(service);
};

module.exports.editService = async (req, res) => {
  const service = await ServiceModel.findById(req.params.id);

  if (!service) {
    res.status(400).json({ message: "Ce service n'existe pas" });
  }

  const updateService = await ServiceModel.findByIdAndUpdate(service, req.body, {
    new: true,
  });

  res.status(200).json(updateService);
};

module.exports.deleteService = async (req, res) => {
  const service = await ServiceModel.findById(req.params.id);

  if (!service) {
    res.status(400).json({ message: "Ce service n'existe pas" });
  }
  await service.deleteOne({ _id: service })
  res.status(200).json("Service supprimé " + req.params.id);
};