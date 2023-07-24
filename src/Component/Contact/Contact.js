import React, { useState } from 'react';
import './Contact.css';
import contact1 from '../Pic/contact1.png';
import { useForm, ValidationError } from "@formspree/react";


const Contact = () => {

    const [state, handleSubmit] = useForm('xpzgwkrp');

    const [data, setData] = useState({
        fullname: '',
        phone: '',
        email:'',
        message: '',
    });

    if (state.succeeded) {
        return <p>Thanks for joining!</p>
    }


    const InputEvent = (event) => {
        const { name, value } = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        });
    };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     alert(
    //         `Your name is ${data.fullname}.
    //         with ${data.phone} phone number,
    //         and ${data.email} email address,.
    //         Thanks for putting your message.`
    //     );
    //     setData({
    //         fullname: '',
    //         phone: '',
    //         email:'',
    //         message: '',
    //     });
    // };


  return (
    <>
        <section className='Contact' id='contact'>
            <div className='container top'>
                <div className='heading text-center'>
                    <h4>CONTACT</h4>
                    <h1>Contact Me</h1>
                </div>

                <div className='content d_flex'>
                    <div className='left box_shodow'>
                        <div className='box box_shadow'>
                            <div className='img'>
                                <img src={contact1} alt='' />
                            </div>
                            
                            <div className='details'>
                                <br />
                                <br />
                                <h1>Mahsa Haddadi</h1>
                                <p>
                                    Feel free to get in touch with me through my contact information to discuss any opportunities you'd like to collaborate on.</p>
                                <br />
                                <p>Email: mahsadev20@gmail.com</p>
                                <br />
                                {/* <span>FIND WITH ME</span>
                                <div className='button f_flex'>
                                    <button className='btn_shadow'>
                                        <i className='fab fa-facebook-f'></i>
                                    </button>
                                </div> */}
                            </div>
                            
                        </div>
                    </div>

                    <div className='right box_shodow'>
                        <form onSubmit={handleSubmit}>
                            <div className='f_flex'>
                                <div className='input row'>
                                    <label htmlFor="name">Your Name</label>
                                    <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
                                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                                </div>
                                <div className='input row'>
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type='phone' name='phone' value={data.phone} onChange={InputEvent} />
                                    <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                                </div>
                            </div>
                            <div className='input'>
                                <label htmlFor="email">Email</label>
                                <input type='email' name='email' value={data.email} onChange={InputEvent} />
                                <ValidationError prefix="Email" field="email" errors={state.errors} />
                            </div>
                            <div className='input'>
                                <label htmlFor="message">Your Message</label>
                                <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                                <ValidationError prefix="Message" field="message" errors={state.errors} />
                            </div>
                            <button type='submit' className='btn_shadow' disabled={state.submitting} >
                                Send Message <i className='fa fa-long-arrow-down'></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default Contact;