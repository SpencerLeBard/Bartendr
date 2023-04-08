FROM node:12
# WORKDIR /
COPY package*.json ./

RUN npm install
COPY authServer.js ./
CMD ["npm", "start"]

# nodemon ./src/Server/rtmp/Auth/authServer.js

