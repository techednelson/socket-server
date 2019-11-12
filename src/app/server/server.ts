import express from 'express';
import { SERVER_PORT } from '../../environment/environment';
import socketIO from 'socket.io';
import http from 'http';

export default class Server {
	public app: express.Application;
	public port: number;
	public socketIO: socketIO.Server;
	private httpServer: http.Server;
	private static instance: Server;

	private constructor() {
		this.app = express();
		this.port = SERVER_PORT;
		this.httpServer = new http.Server(this.app);
		this.socketIO = socketIO(this.httpServer);
		this.listenToSockets();
	}

	public static getInstance(): Server {
		return this.instance || (this.instance = new this());
	}

	public start(callback: any): void {
		this.httpServer.listen(this.port, callback);
	}

	private listenToSockets(): void {
		console.log('Listening to connections - sockets');
		this.socketIO.on('connection', client => {
			console.log('Client connected');
		});
	}
}
