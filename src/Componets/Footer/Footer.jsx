import React from 'react'
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import './Footer.css'
import Logo from "../../assets/Logo.png"

function Footer() {
    return (
        <footer className='Footer'>
            <div className='Footer-wrapper'>
                <div className='logos'>
                    <img src={Logo} alt="" />
                </div>
                <article className='footer-holderss'>
                <main className='footer-holders'>
                    <div className='company-contact'><p>
                        161 Muyibi Street, Ajegunle<br />
                        Lagos Nigeria<br />
                        Tel :09058965388<br />
                        chowfinder1@gmail.com<br />
                    </p></div>
                </main>
                              <main className='footer-holders'>
                    <div className='footer-holders-aboutus'><p>Company</p>
                    <p>About Us</p>
                    <p>Impacts</p>
                   <p> Careers</p></div>
                </main>
                <main className='footer-holders'>
                    <div className='footer-holders-aboutus'><p>Support </p>
                    <p>Contact Us </p>
                    <p>Support Center </p>
                   <p>Request a Callback</p> </div>
                </main>
                <main className='footer-holders'>
                   <div className='footer-holders-aboutus'> <p>Legal</p>
                    <p>Terms and Conition</p>
                    <p>Cookie Policy</p>
                    <p>Restaurants Terms</p></div>
                </main>
                </article>
                <div className='logos'>
                    <BsFacebook color='#1773ea'  className='BsFacebook' />
                    < BsLinkedin color='#0073b1' className='BsFacebook' />
                    <BsTwitter color='#1c96e9' className='BsFacebook' />

                </div>
            </div>
            <div className='copy'>@copyright2023 ChowFinder</div>
        </footer>
    )
}

export default Footer