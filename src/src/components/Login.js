import React from 'react';
import '../App.css';
import styled from 'styled-components'
import axiosWithAuth from '../utils/axiosWithAuth'
import axios from 'axios'
import { BrowserRouter as 
  Link,
  } from 'react-router-dom';
import MainPage from './MainPage';


const Button = styled.button`
  
`;

class Login extends React.Component {

  state = {
    creds: {
      email: '',
      password: ''
    }
  }


  handleChange = e => {
    this.setState({
      creds: {
        ...this.state.creds,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {

    console.log('test');
    e.preventDefault();

      axios
        .post('https://sleep-tracker-1.herokuapp.com/api/auth/login', this.state.creds)
        .then(results =>{
          console.log(results);
          
          if(results.status = 200){
            console.log(this.props);
          }
        })
        .catch(err=>{
          console.log(`returned an error: ${err}`)
        })
  };

  signup = e =>{
    e.preventDefault();

    axios.post('https://sleep-tracker-1.herokuapp.com/api/auth/register', this.state.creds)
        .then(res =>{
            console.log("new user", res);
        })
        .catch(error=>{
            console.log("there was an error: ", error)
        })
  }


  render() {
    return (
      <div className="Login">
          <form >
              <label>Email:</label>
              <input 
                type="text"
                name="email"
                placeholder ="Enter your Email address here"
                value = {this.state.creds.email} 
                onChange = {this.handleChange}
              />
              <label>Password:</label>
              <input 
                type="password"
                name='password'
                placeholder = 'Enter Your Secure Password'
                value = {this.state.creds.password}
                onChange = {this.handleChange}
                />
            <Link to={MainPage}>
              <button onClick={this.login}>Login!</button>
            </Link>
              
              <h1>Havent Signed up yet?<button onClick={this.signup}>SignUp</button></h1>
          </form>
      </div>
    );

  }
}; 

export default Login;