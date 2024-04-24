import React from 'react'
import Layout from '../components/Layout/Layout';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout title={"About Us"}>
    <div className="row contactus ">
      <div className="col-md-6 ">
        <Link to="/">
          <img
          src="/images/3.png"
          alt="contactus"
          style={{ width: "100%" }}
        /></Link>
      </div>
      <div className="col-md-4">
        <p className="text-justify mt-2">
        Welcome to Chi Online, your ultimate destination for fashion-forward clothing and accessories for the whole family. 
        At Chi, we believe that style is a reflection of individuality, and our mission is to empower you to express yourself through the latest trends and timeless classics.
        Founded with a passion for fashion and a commitment to quality, Chi Online brings together a curated selection of men's, women's, and kids' apparel, as well as a stunning array of shoes to complete any look. 
        Whether you're searching for sophisticated workwear, casual weekend essentials, or adorable outfits for the little ones, Chi has you covered.
        </p>
      </div>
    </div>
  </Layout>
  )
}

export default About