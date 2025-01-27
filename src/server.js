"use strict";
exports.__esModule = true;
var express = require("express");
var dotenv = require("dotenv");
var todos_1 = require("./routes/todos");
dotenv.config();
var app = express();
// Middleware
app.use(express.json()); // parse JSON bodies
// Routes
app.use('/todos', todos_1["default"]);
// Start the server
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Server is listening on port ".concat(PORT));
});
