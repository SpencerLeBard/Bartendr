FROM node:12
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY authServer.js ./
CMD ["npm" , "start"]