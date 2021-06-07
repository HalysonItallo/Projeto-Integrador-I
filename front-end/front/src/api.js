import axios from 'axios';

export default axios.create({
  baseURL: 'https://eduacademic.herokuapp.com/authenticate',
});