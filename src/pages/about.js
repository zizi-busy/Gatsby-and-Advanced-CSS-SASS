import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout/Layout'



const About = () => {
    return (
       
        <Layout>
            <h1>About Jere</h1>
            <p>Jere is a hot piece of meat living under the same roof with his witch and dogge</p>
            <p><Link to = '/contact'>Contact me</Link></p>
         </Layout>
    
    )
}

export default About