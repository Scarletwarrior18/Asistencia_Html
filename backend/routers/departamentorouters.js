const express = require("express");
const router = express.Router();
const departamentoController = require("../controllers/departamentoController.js");

// Consultar departamento por código
router.get("/consultar/:codigo", departamentoController.consultarDepartamento);

// Modificar departamento por código
router.put("/modificar/:codigo", departamentoController.modificarDepartamento);

module.exports = router;
