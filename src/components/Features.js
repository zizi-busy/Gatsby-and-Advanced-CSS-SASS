import React from 'react';
import '../scss/main.scss';
import '../css/icon-font.css';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

const Features = ({ img,className}) => {
	return (
		<section className="section-features">
           <BackgroundImage className={className} fluid={img}>
           
			<div className="row">
				<div className="col-1-of-4">
					<div className="feature-box">
						<i className="feature-box__icon icon-basic-world" />
						<h3 class="heading-tert u-margin-bottom-small">Explore the world</h3>
						<p class="feature-box__text">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione neque corporis, itaque
							aliquam tenetur tempore
						</p>
					</div>
				</div>

                <div className="col-1-of-4">
					<div className="feature-box">
						<i className="feature-box__icon icon-basic-compass" />
						<h3 class="heading-tert u-margin-bottom-small">Meet nature</h3>
						<p class="feature-box__text">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione neque corporis, itaque
							aliquam tenetur tempore
						</p>
					</div>
				</div>

                <div className="col-1-of-4">
					<div className="feature-box">
						<i className="feature-box__icon icon-basic-map" />
						<h3 class="heading-tert u-margin-bottom-small">Find your way</h3>
						<p class="feature-box__text">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione neque corporis, itaque
							aliquam tenetur tempore
						</p>
					</div>
				</div>
                <div className="col-1-of-4">
					<div className="feature-box">
						<i className="feature-box__icon icon-basic-heart" />
						<h3 class="heading-tert u-margin-bottom-small">Live a healthier life</h3>
						<p class="feature-box__text">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione neque corporis, itaque
							aliquam tenetur tempore
						</p>
					</div>
				</div>
			</div>
			
            </BackgroundImage>
		</section>
	);
};

export default styled(Features)`
	
    background: linear-gradient(150deg,rgb(85, 51, 255 , 0.5) 15%, rgb(5, 213, 255, 0.5) 70%,rgb(166, 255, 203, 0.6) 94%);

   ${'' /*  background-position: top; */}
    background-size: cover;
    opacity: 1!important;
		
	& > * {
		transform: skewY(5deg);
	 }
 

`;



