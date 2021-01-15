"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const TestController_1 = __importDefault(require("../controller/TestController"));
class TestRouter {
    constructor() {
        this._router = express_1.default.Router();
        this._controller = new TestController_1.default();
        this._configure();
    }
    _configure() {
        this._router.get('/', (req, res, next) => {
            res.send('this is test page!');
        });
        this._router.post('/', (req, res, next) => {
            res.send('this is test page! and you are testing POST method!');
        });
    }
}
module.exports = new TestRouter()._router;
