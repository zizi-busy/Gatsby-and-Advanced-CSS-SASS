import React from "react"
import '../components/layout/layout.scss'
import { graphql } from "gatsby"
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'  
import logo from "../images/logo-white.png"
import Layout from "../components/layout/Layout"
import StyledHero from "../components/header/StyledHero"
import Banner from "../components/header/Banner"
import About from "../components/About"
import Features from "../components/Features"
import Tours from '../components/Tours'
import Testimonials from '../components/testimonials/Testimonials'
import Form from '../components/Form'
import '../scss/main.scss'


export const query = graphql`
  query {
    hero: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    features: file(relativePath: { eq: "nat-4.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    formImage: file(relativePath: { eq: "nat-10.jpg" }) {
			childImageSharp {
				fluid(quality: 90, maxWidth: 1000) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
  }
`

export default ({ data }) => (
  <Layout>
  <Navbar/>
      <StyledHero home="true" img={data.hero.childImageSharp.fluid}>
        <div className="logo-container">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <Banner title="Wilderness" info="is where life happens" />
      </StyledHero>

      <main>
       <About/>
       <Features img={data.features.childImageSharp.fluid} />
      </main>
      <Tours/>
      <Testimonials  />
      <Form className='className' img={data.formImage.childImageSharp.fluid} />
      <Footer/>
  </Layout>
)
