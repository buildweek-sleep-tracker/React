import React, {useState} from 'react';
import Login from './buttons/Login';
import SignUp from './buttons/SignUp';

const Info = () => {

    const [state, setState] = useState({email: "", password: ""})

    const handleChange = (event) => {
        setState({...state, [event.target.name]:event.target.value}) 
    }

    return(
        <div>
            <form>
                <div>
                    <label>Email</label>
                </div>
                <div>
                    <input type='text' name="email" onChange={handleChange}/>
                </div>
                <div>
                    <label>Password</label>
                </div>
                <div>
                    <input type='password' name="password" onChange={handleChange}/>
                </div>
                <Login userInfo={state}/>
                <SignUp userInfo={state}/>
            </form>
        </div>
    )
}

export default Info;