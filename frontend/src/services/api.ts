import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ip-fast.com/api/ip',
})

export default api;