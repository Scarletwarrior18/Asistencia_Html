var express = require('express');
var cors = require("cors");
var serverless = require('serverless-http');
var app = express();
var departamentoroutes = require("../../backend/routes/departamentoroutes.js");

app.use(express.json());
app.use(cors());

var router = express.Router();
router.use("/departamento", departamentoroutes);

app.use('/.netlify/functions', router);
exports.handler = serverless(app);
