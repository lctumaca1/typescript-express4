"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
class Electron {
    constructor() {
        this.electronWindow = null;
        this._app = electron_1.app;
        this._config = {};
        this.init();
    }
    init() {
        this.setAppStates();
    }
    setAppStates() {
        this._app.on('ready', this.startWindow);
    }
    startWindow() {
        this.electronWindow = new electron_1.BrowserWindow();
        this.electronWindow.loadURL('http://localhost:5000');
        //browser event
        this.electronWindow.on('close', () => this.closeWindow);
    }
    closeWindow() {
        this.electronWindow = null;
    }
}
exports.default = Electron;
