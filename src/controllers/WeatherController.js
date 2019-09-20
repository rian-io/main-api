/* eslint-disable no-console */
const axios = require('axios');

module.exports = {
  async currentConditions(req, res) {
    const { lat, lon } = req.query;

    const latLon = `${lat},${lon}`;
    const positionUrl = `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=BUnOfgvzRlhOimWA949ZgPTYdd0AxGdR&q=${latLon}`;

    let response;
    try {
      response = await axios.get(positionUrl);
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao buscar localidade' });
    }

    const locationKey = response.data.Key;
    const locationName = response.data.SupplementalAdminAreas[0].LocalizedName;

    const weatherUrl = `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=BUnOfgvzRlhOimWA949ZgPTYdd0AxGdR&language=pt-br`;

    try {
      response = await axios.get(weatherUrl);
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao buscar clima' });
    }

    const weather = response.data[0];

    return res.json({
      locationName,
      temperature: weather.Temperature.Metric.Value.toLocaleString('pt-BR'),
      weatherText: weather.WeatherText,
    });
  },
};
