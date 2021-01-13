"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = require("express");
const HomeRouter_1 = __importDefault(require("./HomeRouter"));
const TestRouter_1 = __importDefault(require("./TestRouter"));
class MasterRouter {
    constructor() {
        this._router = express_1.Router();
        this._homeRouter = HomeRouter_1.default;
        this._testRouter = TestRouter_1.default;
        this._configure();
    }
    _configure() {
        this._router.use('/', this._homeRouter);
        this._router.use('/test', this._testRouter);
        this._router.use((req, res, next) => {
            res.status(400).render('index');
        });
    }
}
module.exports = new MasterRouter()._router;
