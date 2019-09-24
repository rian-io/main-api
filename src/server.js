/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');

const routers = require('./routers');

const PORT = process.env.PORT || 3000;

const server = express();

server.use(cors());
server.use(express.json());
server.use(routers);

server.listen(PORT, () => {
  console.log(`Server initialized at port: ${PORT}`);
});
