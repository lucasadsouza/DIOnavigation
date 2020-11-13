import axios from 'axios';

const api = axios.create({
  baseURL: 'http://35c7b5671a77.ngrok.io',
});
//192.168.1.5
//http://192.168.1.4
export default api;
