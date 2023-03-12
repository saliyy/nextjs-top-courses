import axios, { AxiosInstance } from "axios";


const topApi: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_DOMAIN,
    timeout: 60000,
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    responseType: 'json'
});

export default topApi;