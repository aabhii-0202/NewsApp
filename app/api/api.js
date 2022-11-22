import axios from 'axios';

const API_KEY = '75706c61390148dda3ac8247d271d9b8';

export default axios.create({
  baseURL: 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=' + API_KEY,
});
