import { Socket } from "socket.io";
import { Message } from '../interfaces/interfaces';
import socketIO from 'socket.io';

export const showClientDisconnected = (client: Socket): void => {
    client.on('disconnect', () => {
        console.log('Client disconnected')
    });
};

export const receiveMessageFromClient = (client: Socket, socketIO: socketIO.Server): void => {
    client.on('message', (message: Message): void => {
        console.log('Received message', message);
        socketIO.emit('reply', message);
    });
};