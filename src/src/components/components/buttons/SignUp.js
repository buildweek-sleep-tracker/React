import React from 'react';
import axios from 'axios'


const SignUp = (props) => {

    const submitForm = (event) => {
        event.preventDefault();

        axios.post(`https://sleep-tracker-1.herokuapp.com/api/auth/register`, props.userInfo )
        .then(res => {
            console.log(res)
        })
        .catch(error =>{
            console.log("there has been an error.", error)
        })
    }


    return(
        <div>
            <button onClick={submitForm}>SignUp</button>
        </div>
    )
}

export default SignUp;