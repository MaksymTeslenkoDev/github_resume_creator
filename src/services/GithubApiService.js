import axios from 'axios';
import config from '../utils/config';

const instance = axios.create({
  baseURL: config.github.apiUrl,
  headers: {
    'Content-Type': 'application/vnd.github.v3+json',
    Authorization: `token ${config.github.accessToken}`,
  },
});
export default instance;