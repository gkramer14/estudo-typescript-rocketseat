"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes");
var app = express_1.default();
var port = 3333;
app.get('/', routes_1.callbackMessage);
app.listen(port, function () {
    console.log("Server running at port " + port);
});
