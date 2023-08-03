import React from 'react'
import './Grow.css'

function Grow() {
    return (
        <div className='Grow'>
            
            <div className='grow-wrapper'>
            <h1>Together, We Can grow Your Business...</h1>
            <main className='group'>
                <div className='group-image'><img src="./assets/grow.png" alt="" />
                </div>
                <div className='group-write'>
                    <h4>Promote your business</h4>
                    <p>Boost sales by increasing your visibility on the most popular online channels.
                        Businesses large and small partner with ChowFinder to reach new customers, increase order volume, and drive more sales</p>
                <span>Find out more about marketing</span>
                </div>
            </main>
            <main className='gang'>
                <div className='group-write'>
                <h4>Reach more customers</h4>
                    <p>Attract new customers and keep them coming back for more with the delivery type that works for you.</p>
                <span>Find out more about our delivery services</span>
                </div>
                <div className='group-image'><img src="./assets/guy.png" alt="guy" /></div>
            </main>
            <main className='became'>
                <h4>Not yet a ChowFinder Partner yet?</h4>
                <button>Create account </button>
            </main>
        </div>
        </div>
    )
}

export default Grow