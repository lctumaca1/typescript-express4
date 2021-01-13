"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
class DBManager {
    constructor() {
        this.db_connection = mysql_1.default.createConnection({
            host: 'localhost',
            user: '',
            password: '',
            database: ''
        });
    }
}
exports.default = DBManager;
