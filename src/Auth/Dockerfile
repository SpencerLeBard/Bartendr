FROM node:12
# WORKDIR /app
COPY package*.json ./
RUN npm install
COPY authServer.js ./
CMD ["npm", "start"]
# nodemon ./src/Server/rtmp/Auth/authServer.js

# bartendr/package.json

