import axios from 'axios';

const base_url = "https://craft-demo-intuit.herokuapp.com/";

export default {
    cities: {
        get: () => {
            return axios.get(`${base_url}cities`)
                .then(res => res.data);
        }
    },
    vehicles: {
        get: () => {
            return axios.get(`${base_url}vehicles`)
                .then(res => res.data);
        }
    }
};