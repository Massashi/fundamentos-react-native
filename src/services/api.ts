import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:3333',
});

export default api;

//yarn json-server server.json -p 3333
//comando para startar server virtual
