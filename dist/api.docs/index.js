"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const YAML = require("yamljs");
class ApiDock {
    constructor() {
        this.swaggerDocumentAdmin = YAML.load('src/api.docs/admin.yaml');
        this.swaggerDocumentChatbot = YAML.load('src/api.docs/chatbot.yaml');
    }
}
exports.default = new ApiDock();
//# sourceMappingURL=index.js.map