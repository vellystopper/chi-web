import React from 'react';
import { Link } from "react-router-dom";
import Layout from '../components/Layout/Layout';

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
         <Link to={"/"}>
         <img
            src="/images/@CHI.png"
            alt="contactus"
            style={{ width: "100%" }}
          />
         </Link>
        </div>
        <div className="col-md-4">
          <p>At Chi Online, we are committed to safeguarding the privacy of our customers. 
             We understand the importance of protecting your personal information and ensuring that it is handled with the utmost care and respect.
             When you shop with Chi Online, we may collect certain information, such as your name, contact details, shipping address, and payment information, solely for the purpose of processing your orders and providing you with a seamless shopping experience. 
             Rest assured that we will never sell or share your information with third parties for marketing purposes.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;