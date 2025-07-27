import React from 'react';
function Awards() {
    return (
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <img src='media/images/largestBroker.svg' alt='largestBroker'/>
            </div>
            <div className='col-6 p-5 mt3'>
                <h2>Largest stock broker in India</h2>
                <p>2+ million Zerodha clients contribute to over 15% of all retail order 
                  volumes in India daily by trading and Investing in:
                </p>

                <div className="row mt-5">
                  <div className="col-6">
                    <ul>
                      <li className='mb-2'>Futures and Options</li>
                      <li className='mb-2'>Commodity derivatives</li>
                      <li className='mb-2'> Currency derivatives</li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul>
                      <li className='mb-2'>Stocks & IPO's</li>
                      <li className='mb-2'>Direct mutual funds</li>
                      <li className='mb-2'>Bonds & Govt Security</li>
                    </ul>
                  </div>
                  <img src='media/images/pressLogos.png' alt='pressLogos'/>
                </div>
            </div>
          </div>
        </div>
      );
}

export default Awards;