import React from 'react'
import call from "./images/call.png";
import insta from "./images/insta.png";
import gmail from "./images/gmail.png";
import fb from "./images/fb.png";
import map from "./images/map.png";
const Contact = () => {
  return (
    <>
    <section id="contact">
	<div className="container">
		<h1>Get In Touch</h1>
		<div className="row">
			<div className="col-md-6">
				<form className="contact-form">
					<div className="form-group">
						<input type="text" className="form-control" placeholder="Your Name"/>
					</div>

					<div className="form-group">
						<input type="tel" className="form-control" placeholder="Phone no."/>
					</div>

					<div className="form-group">
						<input type="email" className="form-control" placeholder="Email id"/>
					</div>

					<div className="form-group">
						<textarea className="form-control" rows={4} placeholder="Message"></textarea>
					</div>

					<button type="submit" className="btn btn-primary">SEND MESSAGE</button>
				</form>
			</div>
			<div className="col-md-6 contact-info"> 
				<div className="follow"><b>Address:</b> <img src={map}/> XYZ Road, Bokaro, Jharkhand, IN </div>
				
				<div className="follow"><b>Phone:</b> <img src={call}/> +91-7250645770 </div>

				<div className="follow"><b>Email:</b> <img src={gmail}/> bilung.basant05@gmail.com </div>
			

			
				<div className="follow"><label><b>Get Social:</b> </label>
					<a href="https://www.facebook.com/basant.bilung.712"><img src={fb}/></a>
					<a href="https://www.instagram.com/basant_bilung/"><img src={insta}/></a>
					<a href="mailto:bilung.basant05@gmail.com"><img src={gmail}/></a>


					 </div>
			</div>

		</div>
	</div>
</section>
    </>
  )
}

export default Contact