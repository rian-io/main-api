const express = require('express');

const MainController = require('./controllers/MainController');
const WeatherController = require('./controllers/WeatherController');
const MailController = require('./controllers/MailController');

const routers = express.Router();

routers.get('/', MainController.index);
routers.get('/weather', WeatherController.currentConditions);
routers.post('/contact', MailController.sendEmail);

module.exports = routers;
