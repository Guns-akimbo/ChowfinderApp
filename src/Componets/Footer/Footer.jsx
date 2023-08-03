import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer className='Footer'>
            <div className='Footer-wrapper'>
                <main className='footer-holders'>
                    <div className='logos'>
                    <img src="./assets/logo.png" alt="" />
                    </div>
                    <div className='company-contact'><p>
                        UK Street,Green homecity<br/>
                        Lagos Nigeria<br/>
                        Tel :09058965388<br/>
                        info@Chowfinder.com<br/>
                        www.ChowFinder.com<br/>
                    </p></div>
                    <div>
                <img src="./assets/ICONS.svg" alt="social"/>
                    </div>
                </main>
                <main className='footer-holders'>
                    {/* <div><p>Company</p>
                    <p>About Us</p>
                    <p>Impacts</p>
                   <p> Careers</p></div> */}
                </main>
                <main className='footer-holders'>
                    {/* <div><h4>Support </h4>
                    <p>Contact Us </p>
                    <p>Support Center </p>
                   <p>Request a Callback</p> </div> */}
                </main>
                <main className='footer-holders'>
                    {/* <p>Legal</p>
                    <p>Terms and Conition</p>
                    <p>Cookie Policy</p>
                    <p>Restaurants Terms</p> */}
                </main>
               
            </div>
            <div className='copy'>@copyright2023 ChowFinder</div>
        </footer>
    )
}

export default Footer