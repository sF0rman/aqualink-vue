import axios from "axios";

const url = process.env.VUE_APP_API

let locale = localStorage.getItem("languange") ?? "en";

const setLocale = (value) => {
    locale = value;
    localStorage.setItem("language", value);
}

const handleError = (err) => {
    if (process.env.DEVELOPMENT) {
        console.log('API Error: ', err);
    }
    return {};
}

const get = (route, params) => {
    return axios.get(`${url}/${locale}/${route}`, { params })
        .then(res => res.data)
        .catch(handleError);
}

const put = (route, params, body) => {
    return axios.put(`${url}/${locale}/${route}`, { body, params })
        .then(res => res.data)
        .catch(handleError);
}

const post = async (route, params, body) => {
    return axios.post(`${url}/${locale}/${route}`, { body, params })
        .then(res => res.data)
        .catch(handleError);
}

const api = {
    get,
    put,
    post,
    setLocale
}

export default api;