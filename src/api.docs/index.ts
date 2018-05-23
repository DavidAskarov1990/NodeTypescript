import * as YAML from 'yamljs';

class ApiDock {
    public swaggerDocumentAdmin: any;
    public swaggerDocumentChatbot: any;

    constructor() {
        this.swaggerDocumentAdmin = YAML.load('src/api.docs/admin.yaml');
        this.swaggerDocumentChatbot = YAML.load('src/api.docs/chatbot.yaml');
    }
}

export default new ApiDock();