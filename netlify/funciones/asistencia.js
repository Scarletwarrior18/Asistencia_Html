var express = require('express');
var cors = require("cors");
var serverless = require('serverless-http');
var app = express();
var asistenciaroutes = require("../../backend/routes/asistenciaroutes.js");

app.use(express.json());
app.use(cors());

var router = express.Router();
router.use("/asistencia", asistenciaroutes);

app.use('/.netlify/functions', router);
exports.handler = serverless(app);
