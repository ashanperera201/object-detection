import axios, { type AxiosResponse } from 'axios';

let axiosInstance = axios.create({
    baseURL: 'https://app.promiseq.com/api'
});

axiosInstance.interceptors.request.use(interceptVal => {

    interceptVal.headers['promiseq-subscription-key'] = import.meta.env.VITE_SUBSCRIPTION_KEY;

    return interceptVal;
})

export default axiosInstance;