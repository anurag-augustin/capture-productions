import React from 'react'
import wedding7 from "./images/slider/wedding(7).jpg";
import wedding8 from "./images/slider/wedding(8).jpg";
import wedding9 from "./images/slider/wedding(9).jpg";
import wedding1 from "./images/slider/wedding(1).jpg";
import wedding2 from "./images/slider/wedding(2).jpg";
const Slider = () => {
  return (
    <>
<div id="slider">
		<div id="headerslider" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#headerslider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#headerslider" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#headerslider" data-bs-slide-to="2" aria-label="Slide 3"></button>

    <button type="button" data-bs-target="#headerslider" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#headerslider" data-bs-slide-to="4" aria-label="Slide 5"></button>

  </div>

  <div className="carousel-inner">

    <div className="carousel-item active" data-bs-interval="5000" >
      <img src={wedding7} className="d-block img-fluid" alt="First Slide"/>
      <div className="carousel-caption">
      		{/* <!-- <h5>Caption 1<h5> --> */}
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="5000" >
      <img src={wedding8} className="d-block img-fluid" alt="Second Slide"/>
    	<div className="carousel-caption">
      		{/* <!-- <h5>Caption 2<h5> --> */}
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="5000">
      <img src={wedding9} className="d-block img-fluid" alt="Third Slide"/>
    	<div className="carousel-caption">
      		{/* <!-- <h5>Caption 3<h5> --> */}
      </div>
    </div>

        <div className="carousel-item" data-bs-interval="5000">
      <img src={wedding1} className="d-block img-fluid" alt="Fourth Slide"/>
    	<div className="carousel-caption">
      		{/* <!-- <h5>Caption 4<h5> --> */}
      </div>
    </div>

       <div className="carousel-item" data-bs-interval="5000">
      <img src={wedding2} className="d-block img-fluid" alt="Fifth Slide"/>
    	<div className="carousel-caption">
      		{/* <!-- <h5>Caption 5<h5> --> */}
      </div>
    </div>




  </div>



  <button className="carousel-control-prev" type="button" data-bs-target="#headerslider" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#headerslider" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
	</div>
    </>
  )
}

export default Slider