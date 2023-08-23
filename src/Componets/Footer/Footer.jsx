import React from 'react'
import { BsFacebook,BsTwitter,BsLinkedin } from "react-icons/bs";
import './Footer.css'
import Logo from "../../assets/Logo.png"

function Footer() {
    return (
        <footer className='Footer'>
            <div className='Footer-wrapper'>
                <main className='footer-holders'>
                    <div className='logos'>
                    <img src={Logo} alt=""/>
                    </div>
                    <div className='company-contact'><p>
                    161 Muyibi Street, Ajegunle<br/>
                        Lagos Nigeria<br/>
                        Tel :09058965388<br/>
                        chowfinder1@gmail.com<br/>
                         </p></div>
                    <div className='social'>
                    <BsFacebook color='#1773ea' size={25}/>
                   < BsLinkedin color='#0073b1' size={25}/>
                   <BsTwitter color='#1c96e9' size={25}/>

                    </div>
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
               
            </div>
            <div className='copy'>@copyright2023 ChowFinder</div>
        </footer>
    )
}

export default Footer