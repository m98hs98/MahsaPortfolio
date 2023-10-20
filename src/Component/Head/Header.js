import React, { useState, useEffect } from 'react';
import "./Header.css";
import logo from "../Pic/logo.png";

const Header = () => {


    // Dark Mode State
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode ? JSON.parse(savedMode) : false;
    });


    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));

        if (darkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    }, [darkMode]);

    const toggleDarkMode = (e) => {
        e.preventDefault();
        setDarkMode(prev => !prev);
        console.log(darkMode);
    };


    // when scroll header at top 
    window.addEventListener("scroll", function() {
        const header = document.querySelector(".header");
        header.classList.toggle("active", window.scrollY > 100);
    });


    //Toggle menu
    const [Mobile, setMobile] = useState(false);

  return (
    <>
        <header className='header'>
            <div className='container d_flex'>
                <div className='logo'>
                    <img src={logo} alt='' />
                </div>

                <div className='navlink'>
                        <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase "} onClick={() => setMobile(false)}>
                            <li><a href='#home'>Home</a></li>
                            <li><a href='#portfolio'>Projects</a></li>
                            <li><a href='#resume'>Resume</a></li>
                            <li><a href='#contact'>Contact</a></li>
                            <li onClick={toggleDarkMode}>
                                <button className='mode-toggle'>{darkMode ? 'Light Mode' : 'Dark Mode'}</button> 
                            </li>
                        </ul>

                    <button className='toggle' onClick={() => setMobile(!Mobile)}>
                        {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}   
                    </button>
                </div>
            </div>
        </header>

    </>
  );
};

export default Header;