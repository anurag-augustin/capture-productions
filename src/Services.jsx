import React from 'react'
import prewedding from "./images/icons/prewedding.png";
import wedding from "./images/icons/wedding.png";
import portfolio from "./images/icons/portfolio.png";
import musicvideo from "./images/icons/musicvideo.png";
const Services = () => {
  return (
    <>
    <section id="services">
	<div className="container">
		<h1>Our Services</h1>
			<div className="row services">
			<div className="col-md-3 text-center"> 
				<div className="icon">
					<img src={prewedding}/>


				</div>
				<h3>Pre-Wedding Shoot</h3>
				<p>About Pre-Wedding Shoot</p>
			</div>

			<div className="col-md-3 text-center"> 
				<div className="icon">
					<img src={wedding}/>


				</div>
				<h3>Wedding Videography</h3>
				<p>About Wedding Videography</p>
			</div>

			<div className="col-md-3 text-center"> 
				<div className="icon">
					<img src={portfolio}/>


				</div>
				<h3>Portfolio Shoot</h3>
				<p>About Portfolio Shoot</p>
			</div>

			<div className="col-md-3 text-center"> 
				<div className="icon">
					<img src={musicvideo}/>


				</div>
				<h3>Music Video</h3>
				<p>About Music Video</p>
			</div>
		</div>
	</div>
</section>
    </>
  )
}

export default Services