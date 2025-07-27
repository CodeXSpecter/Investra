import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-3 mt-5 text-start" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="#" style={{ color: "white", textDecoration: "underline" }}>
          Trace Tickets
        </a>
      </div>
      <div className="row p-3  mb-5 text-start">
        <div className="col-6 p-5  mb-5">
          <h3>Search for an answer or browse help topics to create a ticket</h3>
          <input
            placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
            className="mt-3 mb-3 p-3" style={{borderRadius:"10px", width:"90%"}}
          /><br></br>

          <a href="#" style={{ color: "white", textDecoration: "underline", marginRight:"20px"}}>Track account opening</a>
          <a href="#" style={{ color: "white", textDecoration: "underline", marginRight:"20px"}}>Track segment activation</a><br/>
          <a href="#" style={{ color: "white", textDecoration: "underline",marginRight:"20px" }}>Intraday margins</a>
          <a href="#" style={{ color: "white", textDecoration: "underline" }}>Kite user manual</a>
        </div>
        <div className="col-6 p-5 mb-5">
          <h3>Featured</h3>
          <ol>
            <li>Quarterly Settlement of Funds - July 2025</li>
            <li>
              Exclusion of F&O contracts on 8 securities from August 29, 2025
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
