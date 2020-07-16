import React from 'react'
import '../../scss/main.scss';
import vid1 from '../../images/mountains.mp4'
import vid2 from '../../images/video.webm'

const BgVideo = () => {
    return (
        <div className="bg-video" >
            <video className='bg-video__content' autoPlay muted loop>
                <source src ={vid1} type="video/mp4"/>
                <source src ={vid2} type="video/webm"/>
                Your browser is not supported!
            </video>
    
        </div>
    )
}

export default BgVideo
