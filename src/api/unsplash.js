import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 7398cb17eba4571dedb2b240a41f91407f28d01af8b1b46cfa24f837abe4f4ee'
    }
});
