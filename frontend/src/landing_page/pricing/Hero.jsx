import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className="row">
               <h1 className='mt-5'>Charges</h1>
               <p className='fs-4 text-muted mb-5'>List of all charges and taxes</p>
                    <hr className='text-muted mt-5'/>
               <div className="col-4">
                <img src='media/images/pricingEquity.svg' alt='equity' style={{width:"70%"}} className='mb-5 mt-5'/>
                <h2 className='mb-4'>Free equity delivery</h2>
                <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
               </div>
               <div className="col-4">
                <img src='media/images/intradayTrades.svg' alt='charges' style={{width:"70%"}} className='mb-5 mt-5'/>
                <h2 className='mb-4'>Intraday and F&O trades</h2>
                <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
               </div>
               <div className="col-4">
                <img src='media/images/pricingEquity.svg' alt='Mf pricing image' style={{width:"70%"}} className='mb-5 mt-5'/>
                <h2 className='mb-4'>Free direct MF</h2>
                <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
               </div>
            </div>
        </div>
     );
}

export default Hero;
