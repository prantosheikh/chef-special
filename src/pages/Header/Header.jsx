import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import baner1 from '../../../public/img/banner-7.png';
import baner2 from '../../../public/img/banner-8.png';
import baner3 from '../../../public/img/banner-9.png';
import './Header.css';

const Header = () => {
    return (
      <div className="position-relative">
        <Container>
          <Carousel>
            <Carousel.Item>
              <div className="container ">
                <div className="row ">
                  <div className="col-sm-12 col-md-6 d-flex align-items-center">
                    <div>
                      <h3 className="text-black fs-1">
                        The Best Food Monger in your City Area
                      </h3>
                      <p className="my-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod
                        <br />
                        tempor incididunt ut labore et dolore magna aliqua Quis
                      </p>
                      <button className="btn btn-warning text-light fw-semibold">
                        HIRE NOW
                      </button>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <img className="img-fluid" src={baner1} alt="First slide" />
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="container ">
                <div className="row ">
                  <div className="col-sm-12 col-md-6 d-flex align-items-center">
                    <div>
                      <h3 className="text-black fs-1">
                        The Best Food Monger in your City Area
                      </h3>
                      <p className="my-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod
                        <br />
                        tempor incididunt ut labore et dolore magna aliqua Quis
                      </p>
                      <button className="btn btn-warning text-light fw-semibold">
                        HIRE NOW
                      </button>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <img className="img-fluid" src={baner2} alt="First slide" />
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="container ">
                <div className="row ">
                  <div className="col-sm-12 col-md-6 d-flex align-items-center">
                    <div>
                      <h3 className="text-black fs-1">
                        The Best Food Monger in your City Area
                      </h3>
                      <p className="my-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod
                        <br />
                        tempor incididunt ut labore et dolore magna aliqua Quis
                      </p>
                      <button className="btn btn-warning text-light fw-semibold">
                        HIRE NOW
                      </button>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <img className="img-fluid" src={baner3} alt="First slide" />
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
          <div className="position-absolute top-0 end-0">
            <p
              className="mt-5 p-3 fw-semibold hover"
              style={{ transform: "rotate(90deg)" }}
            >
              Facebook
            </p>
            <p
              className="mt-5 p-3 fw-semibold hover"
              style={{ transform: "rotate(90deg)" }}
            >
              Instagram
            </p>
            <p
              className="mt-5 p-3 fw-semibold hover"
              style={{ transform: "rotate(90deg)" }}
            >
              GitHub
            </p>
          </div>
        </Container>
      </div>
    );
};

export default Header;