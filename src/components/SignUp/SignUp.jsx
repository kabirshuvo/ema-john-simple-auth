import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import './SignUp.css';
const SignUp = () => {
    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        console.log(email, password, confirm);

        setError('');

        if(password !== confirm){
            setError('Your Password did not match')
            return;
        }
        else if(password.length < 6){
            setError('Password must be at least 6 characters or longer')
            return;
        }
        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error);
            setError(error.message);
        })
    }

    return (
        <div className='form-container'>
        <div className='form-title'>
            <h2>Sign-Up</h2>
        </div>

        <form onSubmit={handleSignUp}>
            <div className='form-control'>
                <label htmlFor="email">Email</label>
                <input type='email' name='email' placeholder='your email' id='' required></input>
            </div>
            <div className='form-control'>
                <label htmlFor='password'>Password</label>
                <input type="password" name='password' id='' placeholder='your password' required></input>
            </div>
            <div className='form-control'>
                <label htmlFor='confirm'>Confirm Your Password</label>
                <input type="password" name='confirm' id='' placeholder='please confirm your password' required></input>
            </div>

            <div>
                <input className='submit-btn' value='Login' type="submit" />
            </div>

        </form>
        <p><small>New User? Please <Link to='/login'>Create an Account</Link></small></p>
        <p className='text-error'>{error}</p>

        <div className='google-login-btn'>

        </div>
       
    </div>
    );
};

export default SignUp;