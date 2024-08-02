import axios from 'axios';

const API_BASE_URL = 'https://api.weatherapi.com/v1';
const API_METHOD = '/forecast.json';
const API_KEY = 'b33c2a75e1b44204b6b64031242907';

export const getDataWeather = async (location, language) => {
  try {
    const params = {
      key: API_KEY,
      q: location,
      lang: language,
    };
    const response = await axios.get(`${API_BASE_URL}${API_METHOD}`, {
      params,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};