import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
const Login = () => {
    return (
        <div className='form-container'>
            <div className='form-title'>
                <h2>Log-In</h2>
            </div>

            <form >
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type='email' name='email' placeholder='your email' id='' required></input>
                </div>
                <div className='form-control'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name='password' id='' placeholder='your password' required></input>
                </div>

                <div>
                    <input className='submit-btn' value='Login' type="submit" />
                </div>

            </form>
            <p><small>Don't have an account? please <Link to='/signup'>Sign-Up</Link></small></p>

            <div className='google-login-btn'>

            </div>
           
        </div>
    );
};

export default Login;