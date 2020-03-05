import axios from 'axios';

const axiosWithAuth = () => {

    return axios.create({
        baseURL: 'https://sleep-tracker-1.herokuapp.com/api/',
        headers: {
            authorization : localStorage.getItem('token')
        }
    })
}

export default axiosWithAuth;