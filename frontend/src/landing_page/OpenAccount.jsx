import React from 'react';
import SignupButton from './SignupButton';
function OpenAccount() {
    return ( 
         <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h1 className='mt-5 fs-2'>Open a Zerodha account</h1>
                <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades..</p>
                  <SignupButton />
            </div>
        </div>
     );
}

export default OpenAccount;
