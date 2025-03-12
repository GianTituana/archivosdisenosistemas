const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Conectado a MongoDB"))
    .catch(err => console.log("Error al conectar a MongoDB", err));

app.get("/", (req, res) => res.send("Servidor funcionando"));

app.listen(5000, () => console.log("Servidor corriendo en puerto 5000"));
