"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const apidoc = require("./api.docs");
class App {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
        console.log('apidoc', apidoc);
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    routes() {
        const router = express.Router();
        router.get('/', (req, res) => {
            res.send('Hello WORLD');
        });
        this.app.use('/', router);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map