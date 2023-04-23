import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import './Login.css';
const Login = () => {

    const {signIn} = useContext(AuthContext);

    const handleLogIn = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
    }

    return (
        <div className='form-container'>
            <div className='form-title'>
                <h2>Log-In</h2>
            </div>

            <form onSubmit={handleLogIn}>
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