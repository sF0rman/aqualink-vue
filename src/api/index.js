const url = process.env.VUE_APP_API
const handleError = (err) => {
    if (process.env.DEVELOPMENT) {
        console.log('Error: ', err);
    }
    return {};
}
const api = {
    handleError,
    url
}
export default api;