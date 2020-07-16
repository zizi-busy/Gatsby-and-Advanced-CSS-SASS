import React from "react"


const TestimonialCard = ({src, title, text, name}) => {
  return (
    <div className="story">
        <figure className="story__shape">
            <img className="story__img" src={src} alt="person"/>
            <figcaption className="story__caption">{name}</figcaption>

        </figure>
            <div className="story__text">
                <h3 className="heading-tert u-margin-bottom-small">{title}</h3>
                <p>
                {text}
                </p>
            </div>
    
    </div>
  )
}

export default TestimonialCard
