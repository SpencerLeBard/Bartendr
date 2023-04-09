FROM node:12
# WORKDIR /src/Auth
COPY package*.json ./

RUN npm install
COPY authServer.js ./
CMD ["nodemon", "./src/Auth/authServer.js"]

# nodemon src/Auth/authServer.js



