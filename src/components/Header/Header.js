import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'
import { AuthContext } from '../../context/Context';


const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    return (
       <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to={'/shop'}>Shop</Link>
                <Link to={'/order'}>Order</Link>
                <Link to={'/inventory'}>Inventory</Link>
                <Link to={'/about'}>About</Link>
                {user?.uid? <Link onClick={logOut}>Logout</Link> : <Link to='/login'>Login</Link>}
               
               
            </div>
       </nav>
    );
};

export default Header;