import Axios from 'axios';

const axiosWithAuth = () => {

    return Axios.create({
        baseURL: 'https://sleep-tracker-1.herokuapp.com',
        headers: {
            authorization : localStorage.getItem('token')
        }
    })
}

export default axiosWithAuth;