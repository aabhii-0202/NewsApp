import axios from 'axios';

const API_KEY = '75706c61390148dda3ac8247d271d9b8';
const second = '3ebbcba7a9f646849fbaa5404c857f1d';
const third = 'f03145a0ab214596a202d57123fa0a5d';

export default axios.create({
  baseURL: 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=' + third,
});
