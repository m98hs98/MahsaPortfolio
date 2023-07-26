import React from 'react';
import logo1 from "./Pic/f_logo.png";

const Footer = () => {
  return (
    <>
        <footer>
            <div className='container text-center top'>
                <div className='img'>
                    <img src={logo1} alt='' />
                </div>
                <p>Mahsa Haddadi © 2023</p>
            </div>
        </footer>
    </>
  );
};

export default Footer;