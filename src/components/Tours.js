import React from 'react'
import '../scss/main.scss';
import TourCard from '../components/TourCard'
import pic1 from '../images/nat-5.jpg'
import pic2 from '../images/nat-6.jpg'
import pic3 from '../images/nat-7.jpg'


const Tours = ({data}) => {
    return (
        <section className='section-tours'>
            <div className="u-center-text u-margin-bottom-big">
		     <h2 className="section-heading">Most popular tours</h2>
	        </div>

         <div class="row">
            <div class="col-1-of-3">
                <TourCard
                className= "card__side card__side--back card__side--back-1"
                src={pic1}
                title ='The sea explorer'
                days= '3 day tours'
                people='Up to 30 people'
                guides='2 tour guides'
                sleep='Sleep in cozy hotels'
                difficulty='Difficulty: easy'
                price='$295'
                 />
                    
                
            </div>  
            
            <div class="col-1-of-3">
            <TourCard
                className= "card__side card__side--back card__side--back-2"
                src={pic2}
                title ='The Forest Hiker'
                days= '7 day tours'
                people='Up to 40 people'
                guides='6 tour guides'
                sleep='Sleep in provided'
                difficulty='Difficulty: medium'
                price='$495'
                 />
                    
            
            </div> 
            <div class="col-1-of-3">
            <TourCard
               className= "card__side card__side--back card__side--back-3"
                src={pic3}
                title ='The Snow Adventurer'
                days= '5 day tours'
                people='Up to 15 people'
                guides='3 tour guides'
                sleep='Sleep in provided'
                difficulty='Difficulty: hard'
                price='$695'
           
                 />   
              
            </div>       
        </div>  
        <div class="u-center-text u-margin-top-huge">
                    <a href="#" class="btn btn--green">Discover all tours</a>
                </div>
        </section>
    )
}

export default Tours
