import React from "react";

//here we are using the props beacause there are same components 
//repiting the structure so without ceating each component 
//we can pass prop fron product page directely and 
//resuse it

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mb-5">
      <div className="row mt-5">
        <div className="col-6 ">
          <img src={imageUrl} alt="kite image"/>
        </div>
        <div className="col-1"></div>
        <div className="col-5 p-5 text-start " style={{margin:"0 auto"}}>
            <h1 className="fs-2">{productName}</h1>
            <p>{productDescription}</p>
            <div className="mb-3">
            <a href={tryDemo} className="">Try Demo <i class="fa-solid fa-arrow-right"></i></a>
            <a href={learnMore} style={{marginLeft:"50px"}}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div>
            <a href={googlePlay}><img src="media/images/googlePlayBadge.svg"/></a>
            <a href={appStore} style={{marginLeft:"50px"}}><img src="media/images/appstoreBadge.svg"/></a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
