var express = require('express');
var cors = require("cors");
var serverless = require('serverless-http');
var app = express();
var asignaturaroutes = require("../../backend/routes/asignaturaroutes.js");
app.use(express.json());
app.use(cors());

var router = express.Router();
router.use("/asignatura", asignaturaroutes);

app.use('/.netlify/functions', router);
exports.handler = serverless(app);
