import React from 'react';
import "./Home.css";
import mhero2 from "../Pic/mhero2.jpg"
import { SiJavascript } from "react-icons/si";
import { SiMicrosoftazure } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';




const Home = () => {
  return (
    <>
        <section className='hero' id='home'>
            <div className='container f_flex top'>
                <div className='left top'>
                    <h3>WELCOME TO MY WORLD</h3>
                    <h1> 
                        Hi, I'm <span>Mahsa</span>
                    </h1>
                    <h2>
                        a <span>
                            Web Developer.
                        </span>
                    </h2>

                    <p>As a motivated engineer, I possess a diverse set of skills that enable me to collaborate effectively with fellow developers. I have a strong grasp of essential technologies such as React, TypeScript, JavaScript, HTML, and CSS, which allows me to build dynamic and engaging web applications. Additionally, I am proficient in utilizing Tailwind, Bootstrap, and Git to enhance the development process and familiar with WebPack and unit testing, which contributes to my ability to create robust and well-tested applications.
My passion for learning drives me to constantly acquire new skills, making me a valuable asset to any development project.</p>
                    
                    <div className='hero_btn d_flex'>
                        <div className='col_1'>
                            <h4>FIND ME</h4>
                            <div className='button'>
                                <a href='https://www.linkedin.com/in/mahsa-haddadi/'>
                                    <button className='btn_shadow'>
                                        <i className='fab fa-linkedin-in'></i>
                                    </button>
                                </a>
                                <a href='https://github.com/m98hs98'>
                                    <button className='btn_shadow'>
                                        <i className='fa-brands fa-github'></i>
                                    </button>
                                </a>
                            </div>
                        </div>

                        <div className='col_1'>
                            <h4>EXPERT AT</h4>
                            <div className='btn-group'>
                                <button className='btn_shadow'>
                                    <SiJavascript />
                                </button>
                                <button className='btn_shadow'>
                                    <FaReact />
                                </button>
                                <button className='btn_shadow'>
                                    <SiMicrosoftazure />
                                </button>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className='right'>
                    <div className='image-wrapper'>
                        <img src={mhero2} alt='Hero2' className='fade-border'/>
                    </div>
                </div> 
            </div>
        </section>
    </>
  );
};

export default Home;