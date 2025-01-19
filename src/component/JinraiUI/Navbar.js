import logo from '../../assets/jtlogo.jpeg';
import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [active, setActive] = useState('home');
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);

        const path = location.pathname;
        if (path === '/') setActive('home');
        else if (path === '/about') setActive('about');
        else if (path === '/portfolio') setActive('portfolio');
        else if (path === '/job') setActive('job');
        else if (path === '/contact') setActive('contact');
    }, [location.pathname]); 

    function openNav() {
        document.getElementById('mySidenav').style.width = '250px';
    }

    function closeNav() {
        document.getElementById('mySidenav').style.width = '0';
    }

    return (
        <>
            {/* Navbar */}
            <nav className="border-gray-200 dark:bg-gray-900 bg-white shadow-md shadow-gray-200">
                <div className="lg:max-w-[80%] md:max-w-[90%] flex flex-wrap items-center justify-between mx-auto p-4">
                    {/* Logo */}
                    <Link to="/" onClick={() => setActive('home')} className="flex items-center">
                        <img src={logo} className="h-12 w-12 rounded-lg" alt="Logo" />
                        <span
                            className="self-center text-[16px] font-semibold whitespace-nowrap text-[--bg-color] pt-2"
                            style={{ lineHeight: '18px' }}
                        >
                            Jinrai <br /> Technologies
                        </span>
                    </Link>

                    {/* Hamburger Menu */}
                    <button
                        onClick={openNav}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>

                    {/* Navbar Links */}
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col md:flex-row p-4 md:p-0 mt-4 md:mt-0 border border-gray-100 rounded-lg md:border-0 md:space-x-3">
                            {['home', 'about', 'portfolio','job', 'contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={`/${item === 'home' ? '' : item}`}
                                        onClick={() => setActive(item)}
                                        className={`block py-2 px-3 font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent ${
                                            active === item
                                                ? 'text-[--bg-color] border-b-2 border-[--bg-color]'
                                                : 'text-gray-700 dark:text-gray-400'
                                        }`}
                                    >
                                        {item.toUpperCase()}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Side Navigation */}
            <div id="mySidenav" className="sidenav bg-gray-100">
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
                    &times;
                </a>
                {['home', 'about', 'portfolio','job', 'contact'].map((item) => (
                    <Link
                        key={item}
                        to={`/${item === 'home' ? '' : item}`}
                        onClick={() => {
                            closeNav();
                            setActive(item);
                        }}
                        className={`block py-2 px-3 ${
                            active === item ? 'text-[--bg-color] font-bold' : 'text-gray-700'
                        }`}
                    >
                        {item.toUpperCase()}
                    </Link>
                ))}
            </div>
        </>
    );
};

export default Navbar;
