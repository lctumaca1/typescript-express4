"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Electron_1 = __importDefault(require("./electron/Electron"));
const App_1 = __importDefault(require("./express/App"));
//entry point class
class Main {
    constructor() {
        this._app = new App_1.default();
        this.init();
    }
    init() {
        this._app.startApp();
    }
}
exports.default = Main;
const electron = new Electron_1.default();
const entryPoint = new Main();
