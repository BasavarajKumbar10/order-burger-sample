import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://test-braintree-da1c3.firebaseio.com/'
});

export default instance;