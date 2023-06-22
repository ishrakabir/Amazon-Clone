import React, { useState } from 'react';
import './Header.css'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Links from '../Links/Links';
const Header = () => {
    const [open, setOpen] = useState(true);
    const routes = [
        { id: 1, name: 'Shop', path: '/' },
        { id: 2, name: 'Order Review', path: '/orders' },
        { id: 3, name: 'Manage Inventory', path: '/inventory' },
        { id: 4, name: 'About Us', path: '/about' },
        // { id: 5, name: 'About', path: '/home' }
    ];
    return (
        // <nav className='header'>
        //     <img src={logo} alt='' />
        //     <div>
        //         <Link  to='/'>Shop</Link>
        //         <Link to='/orders'>Order Review</Link>
        //         <Link to='/inventory'>Manage Inventory</Link>
        //         <Link to='/about'>About Us</Link>
        //     </div>
        // </nav>
        <nav className='bg-[#1C2B35] text-white  w-full h-10 mb-20'>
            <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden ">
                {
                    open ? <Bars3Icon /> : <XMarkIcon />
                }
            </div>
            <ul className={`md:flex justify-center text-white text-2xl font-semibold py-5 z-40 bg-[#1C2B35] w-full duration-1000 absolute md:static ${open ? 'top-[-420px]' : 'top-6'}`}>
                {
                    routes.map(route => <Links key={route.id} route={route}></Links>)
                }
            </ul>
        </nav >
    );
};

export default Header;