import React from 'react';
import '../../scss/main.scss';
import TestimonialCard from '../testimonials/TestimonialCard'
import BgVideo from '../testimonials/BgVideo'
import pic8 from "../../images/nat-8.jpg"
import pic9 from "../../images/nat-9.jpg"
import pic10 from "../../images/nat-10.jpg"


const Testimonials = ({data}) => {
    return (
        <section className="section-testimonials">
        <BgVideo/>
         <div className="u-center-text u-margin-bottom-big">
		     <h2 className="section-heading">We make people genuinely happy</h2>
             </div>
        <div class="row">
             <TestimonialCard
             name="Mary Black"
            src={pic8}
            title='I had the time of my life'
            text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Venam accusamus dolorum distinctio similique, corporis vel facilis sit impedit dolorem tempora cupiditate aliquid! Laborum architecto explicabo non laudantium. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam  Lorem ipsum, dolor sit amet consectetu.'
             />
	     </div>
        <div class="row">
             <TestimonialCard
            name="Mark Smith"
            src={pic9}
            title='Best time ever'
            text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Venam accusamus dolorum distinctio similique, corporis vel facilis sit impedit dolorem tempora cupiditate aliquid! Laborum architecto explicabo non laudantium. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam  Lorem ipsum, dolor sit amet consectetu.'
             />
	     </div>
        
            
         <div class="u-center-text u-margin-top-huge">
                    <a href="#" className="btn-text">Read all stories &rarr;</a>
                </div>
                
        </section>
    )
}

export default Testimonials
