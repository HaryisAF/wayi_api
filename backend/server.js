const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 5000;

// connexion à la DB
connectDB();

const app = express();

// Middleware qui permet de traiter les données de la Request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/structure", require("./routes/structures.routes"));
app.use("/category", require("./routes/categories.routes"));
app.use("/service", require("./routes/services.routes"));
app.use("/responsable", require("./routes/responsables.routes"));
app.use("/visitor", require("./routes/visitors.routes"));

//Lancer le serveur
app.listen(port, () => console.log("Le serveur a démarré au port " + port) );