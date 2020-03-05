import React from 'react';
import axios from 'axios'


const Login = (props) => {

    const submitForm = (event) => {
        event.preventDefault();
        
        axios.post(`https://sleep-tracker-1.herokuapp.com/api/auth/login`, props.userInfo )
        .then(res => {
            console.log(res)
        })
        .catch(error =>{
            console.log("there has been an error.")
        })
    }


    return(
        <div>
            <button onClick={submitForm}>Login</button>
        </div>
    )
}

export default Login;