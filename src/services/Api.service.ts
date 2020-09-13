import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://jobs.github.com',
});

export default Api;
