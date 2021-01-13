"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const electron_1 = __importDefault(require("electron"));
const MasterRouter_1 = __importDefault(require("./router/MasterRouter"));
const Server_1 = __importDefault(require("./Server"));
class App {
    constructor() {
        this.app = express_1.default();
        this.server = new Server_1.default(this.app);
        this.setViewEngine();
        this.setRouter();
    }
    setRouter() {
        this.app.use('/', MasterRouter_1.default);
    }
    setViewEngine() {
        this.app.set('views', path_1.default.join(__dirname, 'views'));
        this.app.set('view engine', 'ejs');
        // this.app.use(express.static( path.join(__dirname, 'public') ));
    }
}
const app = new App();
const elec_app = electron_1.default.app;
console.log(elec_app);
