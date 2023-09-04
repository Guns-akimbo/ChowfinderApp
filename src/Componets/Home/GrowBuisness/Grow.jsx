import React from 'react'
import './Grow.css'
import bike from "../../../assets/bike.png"
import businessaccount from "../../../assets/business account.png"
import { NavLink } from 'react-router-dom'

function Grow() {
    return (
        <div className='Grow'>

            <div className='grow-wrapper'>
                <div className='grow-Together'><p>Grow Your Business With Us</p></div>
                <main className='group'>
                    <div className='group-image'><img src={businessaccount} alt="" />
                    </div>
                    <div className='group-write'>
                        <div className='grow-group-header'> <h4>Promote your <span className='business'>Business </span></h4></div>
                        <div className='grow-group-content'><p>Boost sales by increasing your visibility on the most popular online channels.
                            Businesses large and small partner with ChowFinder to reach new customers, increase order volume, and drive more sales</p>
                        </div>
                        <span className='grow-group-find'>Find out more about marketing</span>
                    </div>
                </main>
            </div>
            <main className='grow-gang'>
                <div className='grow-gang-wrapper'>
                    <div className='gang-write'>
                        <div className='gang-write-header'><h4>Reach more <span className='business'>customers</span></h4></div>
                        <div className='grow-group-content'><p>Attract new customers and keep them coming back for more with the delivery type that works for you.</p></div>
                        <span className='grow-group-find'>Find out more about our delivery services</span>
                    </div>
                    <div className='group-image'><img src={bike} alt="" /></div>

                </div>
            </main>
            <main className='grow-became'>
                <div className='grow-became-wrapper'>
                    <div className='grow-became-header'><p>Not yet a ChowFinder Partner yet?</p></div>
                    <div grow-became-btn><button className='grow-became-button'><NavLink to='/partner'  className="custom-link">Create account</NavLink> </button></div>

                </div>
            </main>

        </div>
    )
}

export default Grow