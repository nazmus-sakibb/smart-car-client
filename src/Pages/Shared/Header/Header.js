import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then()
            .catch()
    }

    const menuItems = <>
        <li className='font-semibold'><Link to="/">Home</Link></li>
        {
            user?.email ?
                <>
                    <li className='font-semibold'><Link to="/orders">Orders</Link></li>
                    <li className='font-semibold'>
                        <button onClick={ handleLogout } className='btn-ghost'>Sign Out</button>
                    </li>
                </>
                :
                <>
                    <li className='font-semibold'><Link to="/login">Login</Link></li>
                </>
        }
    </>


    return (
        <div className="navbar p-10 bg-base-100 overflow-hidden">
            <div>
                <Link to='/' className="">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-start overflow-hidden">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline btn-warning">Appointment</button>
            </div>
        </div>
    );
};

export default Header;