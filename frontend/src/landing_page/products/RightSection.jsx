import React from "react";

function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5 text-start" style={{margin:"auto 0"}}>
          <h1 className="fs-2">{productName}</h1>
          <p>{productDescription}</p>
          <div className="mb-3">
            <a href={learnMore} style={{ marginLeft: "0" }}>
              Learn More <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          
        </div>
        <div className="col-6">
            <img src={imageUrl} alt="kite image"/>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
