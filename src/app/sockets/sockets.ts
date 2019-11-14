import { Socket } from "socket.io";
import { Payload } from '../interfaces/interfaces';

export const showClientDisconnected = (client: Socket): void => {
    client.on('disconnect', () => {
        console.log('Client disconnected')
    });
};

export const receiveMessageFromClient = (client: Socket): void => {
    client.on('message', (payload: Payload): void => {
        console.log('Received message', payload);
    });
};