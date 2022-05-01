import React from 'react'
import gallery1 from "./images/gallery/gallery(1).jpg";
import gallery2 from "./images/gallery/gallery(2).jpg";
import gallery3 from "./images/gallery/gallery(3).jpg";
import gallery4 from "./images/gallery/gallery(4).jpg";
import gallery5 from "./images/gallery/gallery(5).jpg"; 
const Gallery = () => {
  return (
    <>
    <section id="gal">
	<h1>Welcome to Our Gallery</h1>
	<div className="gallery">
		<div className="image-box ">
			<img src={gallery1}/>
		</div>

		<div className="image-box">
			<img src={gallery2}/>
		</div>

		<div className="image-box active">
			<img src={gallery3}/>
		</div>

		<div className="image-box">
			<img src={gallery4}/>
		</div>
		<div className="image-box">
			<img src={gallery5}/>
		</div>


		
	</div>
</section>
    </>
  )
}

export default Gallery