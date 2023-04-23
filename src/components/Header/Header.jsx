import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import { AuthContext } from '../../providers/AuthProvider';
import './Header.css';

const Header = () => {

        const {user, logOut } = useContext(AuthContext)
        console.log(user)

        const handleLogOut = () => {
            logOut()
            .then(result => {})
            .catch(error => console.error(error))
        }


    return (
        
        <nav className='header'>
            <div>
            <Link to="/"><img src={logo} alt="" /></Link>
            </div>
            
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Log-In</Link>
                <Link to='/signup'>Sign-Up</Link>

                {user && <span style={{color: '#fff', marginLeft: '1rem'}}> Welcome: {user} <button onClick={handleLogOut}>SignOut</button></span>}

            </div>
        </nav>
    );
};

export default Header;