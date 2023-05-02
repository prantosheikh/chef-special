import React from "react";
import { Container } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import footerImg from '../../../../public/img/hash-key.png';
 
const Footer = () => {
  return (
    <div className="bg-black">
      <Container>
        <div className="row p-5">
          <div className="col-sm-6 col-lg-6 text-white d-flex flex-column">
            <span>
              <img width={100} src={footerImg} alt="" />
            </span>
            <span className="mt-3">CHEF Industries Ltd.</span>
            <span>Providing reliable tech since 2023</span>
          </div>
          <div className="col-sm-6 col-lg-6 text-white d-flex flex-column">
            <span className="mb-3 fw-semibold">SOCIAL</span>
            <span>
              <FaFacebook className="text-secondary fs-2 me-2"></FaFacebook>
              <FaYoutube className="text-secondary fs-2 me-2"></FaYoutube>
              <FaTwitter className="text-secondary fs-2 me-2"></FaTwitter>
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
