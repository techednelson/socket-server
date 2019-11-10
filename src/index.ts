import Server from './app/server';
import router from './app/routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = new Server();

// Body Parser
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

// CORS
server.app.use(cors({ origin: true, credentials: true }));

server.app.use('/', router);

server.start(() => {
	console.log(`Server is listening on port ${server.port}`);
});
