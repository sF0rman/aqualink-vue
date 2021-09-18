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

const addHeaders = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
        return {
            Authorization: `Bearer ${jwt}`
        }
    }
    return {}
}

const get = (route, params, lang = true) => {
    return axios.get(createRoute(route, lang), { params, headers: addHeaders() })
        .then(res => res.data)
        .catch(handleError);
}

const put = (route, params, body, lang = true) => {
    return axios.put(createRoute(route, lang), body, { params, headers: addHeaders() })
        .then(res => res.data)
        .catch(handleError);
}

const post = async (route, params, body, lang = true) => {
    return axios.post(createRoute(route, lang), body, { params, headers: addHeaders() })
        .then(res => res.data)
        .catch(handleError);
}

const login = async (body) => {
    // Login with strapi doesn't include /api on its route
    const adjustedUrl = url.replace('/api', '');
    return axios.post(`${adjustedUrl}/auth/local`, body)
        .then(res => res.data)
        .catch(handleError);
}

const me = async () => {
    const adjustedUrl = url.replace('/api', '');
    return axios.get(`${adjustedUrl}/users/me`, { headers: addHeaders() })
    .then(res => res.data)
    .catch(handleError);
}

const createRoute = (route, lang) => {
    if (lang) {
        return `${url}/${locale}/${route}`
    }
    return `${url}/${route}`
}

const api = {
    get,
    put,
    post,
    login,
    me,
    setLocale
}

export default api;