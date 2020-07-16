import React from 'react';

import '../scss/main.scss';
import pic1 from "../images/nat-1-large.jpg";
import pic2 from "../images/nat-2-large.jpg";
import pic3 from "../images/nat-3-large.jpg";


const About = () => {
return (
<section className="section-about">
	<div className="u-center-text u-margin-bottom-big">
		<h2 className="section-heading">Exciting tours for adventurous people</h2>
	</div>

	<div className="row">
		<div className="col-1-of-2">
			<h3 className="heading-tert u-margin-bottom-small ">You're going to fall in love with nature</h3>
			<p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolore sed, adipisci
				corporis consectetur quos qui iste totam veniam, cupiditate, deserunt porro expedita velit magni repellendus
				saepe accusamus aliquid aspernatur.</p>

			<h3 className="heading-tert u-margin-bottom-small">Live adventures like you never have before</h3>
			<p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolore sed, adipisci
				corporis consectetur quos qui iste totam veniam, cupiditate, deserunt porro expedita velit magni repellendus
				saepe accusamus aliquid aspernatur.</p>
			<a href="#" className="btn-text">Learn more &rarr;</a>
		</div>	
			<div className="col-1-of-2">
				<div className="composition">
					<img src={pic1} alt="photo1" className="composition__photo composition__photo--p1"/>
					<img src={pic2} alt="photo2" className="composition__photo composition__photo--p2"/>
					<img src={pic3} alt="photo3" className="composition__photo composition__photo--p3"/>
				</div>
		</div>
	</div>
</section>
);
};

export default About;