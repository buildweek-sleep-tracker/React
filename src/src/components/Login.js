import React from 'react';
import '../App.css';
import styled from 'styled-components'

const Button = styled.button`
  
`;

function Login() {
  return (
    <div className="Login">
        <form>
            <label>Email:</label>
            <input type="text"></input>
            <label>Password:</label>
            <input type="password"></input>
            <button>Login!</button>
        </form>
    </div>
  );
}

export default Login;