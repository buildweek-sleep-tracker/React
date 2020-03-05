import React from 'react';
import '../App.css';
import styled from 'styled-components'
import axiosWithAuth from '../utils/axiosWithAuth'
import axios from 'axios'


const Button = styled.button`
  
`;

class Login extends React.Component {

  state = {
    creds: {
      email: 'test',
      password: 'test'
    }
  }


  handleChange = e => {
    this.setState({
      creds: {
        ...this.state.creds,
        [e.target.value]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();

    // axios()
    //   .post('/login', this.state.creds)
    //   .then(results => {
    //     console.log(results);
    //     localStorage.setItem("token", results.data.payload);
    //     this.props.history.push('protected');
    //   })

      axios
        .post('https://sleep-tracker-1.herokuapp.com/api/auth/login', this.state.creds)
        .then(results =>{
          console.log(results);
        })
        .catch(err=>{
          console.log(`returned an error: ${err}`)
        })
  };


  render() {
    return (
      <div className="Login">
          <form onSubmit={this.login}>
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
              <button>Login!</button>
          </form>
      </div>
    );

  }
}; 

export default Login;