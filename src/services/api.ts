import axios from 'axios';

// setando base url para as chamadas
export const api = axios.create({
  baseURL: 'http://localhost:3333/'
})