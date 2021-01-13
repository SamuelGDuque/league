import axios from 'axios';

const apidragon = axios.create({
  baseURL: 'http://ddragon.leagueoflegends.com/cdn',
});

export default apidragon;
