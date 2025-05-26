const express = require("express");
const router = express.Router();
const asignaturaController = require("../controllers/asignaturaController.js");

// Consultar asignatura por código
router.get("/consultar/:codigo", asignaturaController.consultarAsignatura);

// Agregar nueva asignatura
router.post("/agregar", asignaturaController.agregarAsignatura);

// Registrar estudiante en una asignatura específica
router.post("/registrar-estudiante", asignaturaController.registrarEstudianteEnAsignatura);

module.exports = router;
