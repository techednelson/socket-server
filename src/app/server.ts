import express from 'express';
import { SERVER_PORT } from '../environment/environment';

export default class Server {
	public app: express.Application;
	public port: number;

	constructor() {
		this.app = express();
		this.port = SERVER_PORT;
	}

	public start(callback: any): void {
		this.app.listen(this.port, callback);
	}
}
