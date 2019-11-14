# Base image
FROM node:10.17

# Set working directory
RUN mkdir -p /usr/src/server
WORKDIR /usr/src/server

# Install and cache app dependencies
COPY ./package.json /usr/src/server/
RUN npm install --silent

# Start app
CMD npm run start:prod
