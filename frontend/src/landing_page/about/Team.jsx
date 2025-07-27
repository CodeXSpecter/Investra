import React from 'react';

function Team() {
    return ( 
        <div className='container'>
            <h1>People</h1>

             <div className="row p-5 mt-2">
                <div className="col-1"></div>
                <div className="col-5 pt-0 p-5 ">
                   <img src="media/images/nithinKamath.jpg" alt="founder image" style={{borderRadius:"100%",width:"80%"}}/>
                   <h2 className='text-muted fs-5 p-2'>Nithin Kamath</h2>
                   <p className='text-muted fs-6'>Founder,CEO</p>
                </div>

                <div className="col-5 text-start fs-6 text-muted " >
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href="/">Homepage</a> / <a href="/tradingqna">TradingQnA</a> /  <a href="/twitter">Twitter</a></p>
                </div>
                <div className="col-1"></div>
             </div>
        </div>
     );
}

export default Team;