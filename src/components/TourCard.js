import React from 'react';
import '../scss/main.scss';
import { Link } from 'gatsby'

const TourCard = ({ className, src, title, days, people, guides, sleep, difficulty, price }) => {
	return (
		<div className="card">
			<div className="card__side card__side--front">
				<img src={src} className="card__picture card__picture--1" alt="pic" />
				&nbsp;
				<h4 className="card__heading">
					<span className="card__heading-span card__heading-span--1">{title}</span>
				</h4>
				<div className="card__details">
					<ul>
						<li>{days}</li>
						<li>{people}</li>
						<li>{guides}</li>
						<li>{sleep}</li>
						<li>{difficulty}</li>
					</ul>
				</div>
			</div>
			<div className={className}>
				<div className="card__cta">
					<div className="card__price-box">
						<p className="card__price-only">Only</p>
						<p className="card__price-value">{price}</p>
					</div>
					<Link className="btn btn--white" to ='/popup'>
						Book now!
					</Link>
			
				</div>
			</div>
		</div>
	);
};

export default TourCard;
