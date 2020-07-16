import React from 'react'
import '../scss/main.scss';
import pic4 from '../images/nat-4.jpg'
import pic5 from '../images/nat-5.jpg'
import { Link } from 'gatsby'


const Popup = () => {
    return (
        <div className="popup" >
        <div className="popup__content">
            <div className="popup__left">
                <img src={pic4} alt="Tour photo" className="popup__img"/>
                <img src={pic5} alt="Tour photo" className="popup__img"/>
            </div>
            <div className="popup__right">
                <Link to ='/' className="popup__close">&times;</Link>
                <h2 className="section-heading u-margin-bottom-small">Start booking now</h2>
                <h3 className="heading-tert u-margin-bottom-small">Important &ndash; Please read these terms before booking</h3>
                <p className="popup__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Sed sed risus pretium quam. Aliquam sem et tortor consequat id. Volutpat odio facilisis mauris sit
                    amet massa vitae. Mi bibendum neque egestas congue. Placerat orci nulla pellentesque dignissim enim
                    sit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Malesuada pellentesque elit eget
                    gravida cum sociis natoque penatibus et. Proin fermentum leo vel orci porta non pulvinar neque laoreet.
                    Gravida neque convallis a cras semper. Molestie at elementum eu facilisis sed odio morbi quis. Faucibus
                    vitae aliquet nec ullamcorper sit amet risus nullam eget. Nam libero justo laoreet sit. Amet massa
                    vitae tortor condimentum lacinia quis vel eros donec. Sit amet facilisis magna etiam. Imperdiet sed
                    euismod nisi porta.
                </p>
                <a href="#" className="btn btn--green">Book now</a>
            </div>
        </div>
    </div>
    )
}

export default Popup
