const express = require('express');

const MainController = require('./controllers/MainController');
const WeatherController = require('./controllers/WeatherController');

const routers = express.Router();

routers.get('/', MainController.index);
routers.get('/weather', WeatherController.currentConditions);

module.exports = routers;
