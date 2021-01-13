"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Server {
    constructor(app) {
        this._port = process.env.PORT || 5000;
        this._app = app;
        this.createServer();
    }
    createServer() {
        this._app.listen(this._port, () => {
            console.log(`Server is listening on port: ${this._port}`);
        });
    }
}
exports.default = Server;
