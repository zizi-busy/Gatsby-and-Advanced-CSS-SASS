import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

const StyledHero = ({ img, className, children, home }) => {
	return (
        <header className="header">
		<BackgroundImage className={className} fluid={img} home={home}>
			{children}
		</BackgroundImage>
        </header>
	);
};

export default styled(StyledHero)`
   height:${(props) => (props.home ? '95vh' : '50vh')};
    background:${(props) =>
		props.home ? 'linear-gradient(175deg,rgb(85, 51, 255 , 0.4) 15%, rgb(5, 213, 255, 0.7) 70%,rgb(166, 255, 203, 0.6) 94%)' : 'none'};
    background-position: top;
    background-size: cover;
    opacity: 1!important;
    position:relative;
    
`;


			
			