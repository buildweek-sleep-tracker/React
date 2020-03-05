import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function MainPage () {

    return(
        <div>
            <div>
                <DesktopNav>
                    <ul className='nav-links'>
                        <li>
                            <Link to='/HomePage' className='link'>Home</Link>
                        </li>
                        <li>
                            <Link to='/' className='link'>Profile</Link>
                        </li>
                        <li>
                            <Link to='/' className='link'>My Stats</Link>
                        </li>
                        <li>
                            <Link to='/' className='link'>Settings</Link>
                        </li>
                    </ul>

                </DesktopNav>
            </div>
            <div>
                <h2>Todays date is {Date()}</h2>
                <form>
                    <label htmlFor='btime'>Went to sleep at: </label>
                    <input type='time' id='btime' name='btime'/>
                    <label htmlFor='wtime'>Woke up at: </label>
                    <input type='time' id='wtime' name='wtime'/>
                </form>
                <h2>How did you feel...</h2>
                <form>
                    <label htmlFor='wfeel'>🙂</label>
                    <input type='radio' id='wfeel' name='feel' value='1'/>
                    <label htmlFor='wfeel'>🙂</label>
                    <input type='radio' id='wfeel' name='feel' value='2'/>
                    <label htmlFor='wfeel'>🙂</label>
                    <input type='radio' id='wfeel' name='feel' value='3'/>
                    <label htmlFor='wfeel'>🙂</label>
                    <input type='radio' id='wfeel' name='feel' value='4'/>
    
                </form>
                
            </div>
        </div>
    );
}

const DesktopNav = styled.nav`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-content: center;

    background: #373534;
    color: black;

    hight: 15vh;

    .nav-links{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        align-content: center;
        width: 35vw;
        list-style: none;
    }

    .link{
        color:#ffffff;
        text-decoration: none;
    }

    .link:hover{
        text-decoration: underline;
        color: #aaf;
        text-shadow: none;
        -webkit-transition: 200ms linear 0s;
        -moz-transition: 200ms linear 0s;
        -o-transition: 200ms linear 0s;
        transition: 200ms linear 0s;
        outline: 0 none;
    }

    form{
        magin: 3% 3;
    }
`
export default MainPage;