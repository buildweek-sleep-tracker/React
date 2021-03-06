import React, {useState} from 'react';
import styled from 'styled-components'
import { BrowserRouter as 
    Link,
    } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import axios from 'axios'


const SignUp = () => {

    const [userReg, setUserReg] = useState({
        name: '',
        username:'',
    })

    const handleChange = (e) =>{
        e.preventDefault();
        setUserReg({
            ...userReg,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) =>{
        axios.post('https://sleep-tracker-1.herokuapp.com/api/auth/register', userReg)
            .then(res =>{
                console.log("new user", res);
            })
            .catch(error=>{
                console.log("there was an error: ", error)
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                    <p>Welcome! Sign Up to see your sleep or upload new ones.</p>
                    <div className="grey-text">
                        <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right"  onChange={handleChange}/>
                        <MDBInput label="Type your password" icon="lock" group type="password" onChange={handleChange}/>
                    </div>
                    <div className="text-center">
                        <Button>
                            <Link to='/Homepage'>Login</Link>
                        </Button>
                    </div>
                </form>
                <p> Have an account?
                    <Link to='/Login'> Login</Link>
                </p>
        </div>
    );
}

const Button = styled.button`
    color: white;
    font-size: 1em;
    margin: 3em;
    padding: 0.25em 12em;
    border: 2px solid #D81E05;
    background-color: #D81E05;
    border-radius: 6px;
`

export default SignUp;