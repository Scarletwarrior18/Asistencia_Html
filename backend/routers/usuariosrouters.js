// routers/usersRouters.js
const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/userscontroller.js");

// Ruta GET para consultar detalle por parámetro `?iden=ID`
router.get("/", usuariosController.consultarDetalle);

// Ruta POST para registrar un usuario
router.post("/", usuariosController.ingresar);

module.exports = router;
