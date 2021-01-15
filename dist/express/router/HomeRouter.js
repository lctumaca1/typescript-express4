"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = require("express");
const HomeController_1 = __importDefault(require("../controller/HomeController"));
class HomeRouter {
    constructor() {
        this._router = express_1.Router();
        this._controller = new HomeController_1.default();
        this._configure();
    }
    _configure() {
        this._router.get('/', (req, res, next) => {
            res.send('this is home!');
        });
    }
}
module.exports = new HomeRouter()._router;
