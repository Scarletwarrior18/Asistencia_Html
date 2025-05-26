const express = require("express");
const router = express.Router();
const asistenciaController = require("../controllers/asistenciaController.js");

// Crear una nueva sesión de asistencia
router.post("/crear", asistenciaController.crearSesion);

// Agregar estudiante a la sesión
router.post("/agregar", asistenciaController.agregarEstudiante);

// Cambiar estado a PRESENTE
router.put("/estado/presente/:codigo", asistenciaController.cambiarEstadoPresente);

// Cambiar estado a LLEGÓ TARDE
router.put("/estado/tarde/:codigo", asistenciaController.cambiarEstadoTarde);

// Guardar sesión
router.post("/guardar", asistenciaController.guardarSesion);

// Consultar sesión completa
router.get("/consultar", asistenciaController.consultarSesion);

module.exports = router;
