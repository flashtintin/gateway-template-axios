import axios from 'axios';

const instance = axios.create({
  baseURL: '/'
});

instance.interceptors.request.use(data => data);

instance.interceptors.response.use((data) => {
  return data.data;
}, (err) => {
  console.log(err);
  Promise.resolve(err);
});

export default instance;
