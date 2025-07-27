import React from "react";
import SignupButton from "../SignupButton";

function Universe() {
  return (
    <div className="container">
      <div className="row ">
        <h1 className="mt-5 mb-4">The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 text-small p-5 mb-5 text-start">
          <img src="media/images/smallcaseLogo.png" alt=" smallcase logo" className="mb-4"/>
          <p>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>

           <img
            src="media/images/dittoLogo.png"
            alt=""
            style={{ width: "40%" }}
            className="mt-5 mb-4"
          />
          <p>
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <div className="col-4 text-small p-5 mb-5 text-start">
          <img
            src="media/images/streakLogo.png"
            alt=""
            style={{ width: "50%" }}
            className="mb-4"
          />
          <p>
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>

          <img
            src="media/images/zerodhaFundhouse.png"
            alt=""
            style={{ width: "50%" }}
            className="mt-5 mb-4"
          />
          <p>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 text-small p-5 mb-5 text-start">
         <img src="media/images/sensibullLogo.svg" alt="" className="mb-4 pt-1" style={{width:"50%"}}/>
          <p>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>

          <img src="media/images/goldenpiLogo.png" alt="" className="mt-5 mb-4"/>
          <p>Bonds trading platform</p>
        </div>
        <SignupButton/>
      </div>
    </div>
  );
}

export default Universe;
