import React from 'react';
import "./Footer.css"
import logo1 from "../Pic/Mlogo.jpeg";

const Footer = () => {
  return (
    <>
        <footer>
            <div className='container text-center top'>
                <div className='logo'>
                    <img src={logo1} alt='Logo' />
                </div>
                <p>Mahsa Haddadi © 2023</p>
            </div>
        </footer>
    </>
  );
};

export default Footer;