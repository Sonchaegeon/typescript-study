import express, { Application } from 'express';
import morgan from 'morgan'
import { threadId } from 'worker_threads';

export class App {
    private app: Application;

    constructor(private port?: number | string){
        this.app = express();
        this.settings();
        this.middlewares();
    }

    settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    middlewares() {
        this.app.use(morgan('dev'));
    }

    async listen() {
        await this.app.listen(this.app.get('port'));
        console.log('Server running on port', this.app.get('port'));
    }
}