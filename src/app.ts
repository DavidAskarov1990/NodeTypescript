import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import * as apidoc from './api.docs';

class App {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
        console.log('apidoc', apidoc)
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {
        const router = express.Router();
        router.get('/', (req: Request, res: Response) => {
            res.send('Hello WORLD');
        });
        this.app.use('/', router);
    }
}

export default new App().app;