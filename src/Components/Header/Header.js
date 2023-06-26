import React, { useContext, useState } from 'react';
import './Header.css'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Links from '../Links/Links';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Header = () => {

    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext)
    console.log(user);
    const handleLogout = () => {
        logout();
    }

    return (
        <nav className=' z-30 sticky top-0'>
            <div className='header'>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
    
                    {
                        user ?
                            <>
                            <span className='text-white mx-6'>Welcome {user.email} </span>
                            <Link onClick={handleLogout}> Log out</Link>
                            </>
                            :
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/signup">Sign up</Link>
                            </>
                    }
              
            </div>
        </nav>
    );






    // const [open, setOpen] = useState(true);
    // const routes = [
    //     { id: 1, name: 'Shop', path: '/' },
    //     { id: 2, name: 'Order Review', path: '/orders' },
    //     { id: 3, name: 'Manage Inventory', path: '/inventory' },
    //     { id: 4, name: 'About Us', path: '/about' },
    //     { id: 5, name: 'Login', path: '/login' },
    //     { id: 6, name: 'Sign Up', path: '/signup' },
    // ];
    // return (
    //     // <nav className='header'>
    //     //     <img src={logo} alt='' />
    //     //     <div>
    //     //         <Link  to='/'>Shop</Link>
    //     //         <Link to='/orders'>Order Review</Link>
    //     //         <Link to='/inventory'>Manage Inventory</Link>
    //     //         <Link to='/about'>About Us</Link>
    //     //     </div>
    //     // </nav>
    //     <nav className='bg-[#1C2B35] text-white  w-full h-10 mb-20'>
    //         <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden ">
    //             {
    //                 open ? <Bars3Icon /> : <XMarkIcon />
    //             }
    //         </div>
    //         <ul className={`md:flex justify-center text-white text-2xl font-semibold py-5 z-40 bg-[#1C2B35] w-full duration-1000 absolute md:static ${open ? 'top-[-420px]' : 'top-6'}`}>
    //             {
    //                 routes.map(route => <Links key={route.id} route={route}></Links>)
    //             }
    //         </ul>
    //     </nav >
    // );
};

export default Header;