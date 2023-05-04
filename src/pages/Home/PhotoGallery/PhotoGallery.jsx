import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import img1 from '../../../../public/img/img2/1.jpg';
import img2 from '../../../../public/img/img2/2.jpg';
import img3 from '../../../../public/img/img2/3.jpg';
import img4 from '../../../../public/img/img2/4.jpg';
import img5 from '../../../../public/img/img2/5.jpg';
import img6 from '../../../../public/img/img2/6.jpg';
import img7 from '../../../../public/img/img2/7.jpg';

const PhotoGallery = () => {
    return (
      <Container className="my-5">
        <h2 className='text-center my-5'>recipes gallery section</h2>
        <Row>
          <Col xs={12} md={8}>
            <Card.Img variant="top" src={img1} />
          </Col>
          <Col xs={6} md={4}>
            <Card.Img variant="top" src={img2} />
          </Col>
        </Row>

        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
        <Row>
          <Col xs={6} md={4}>
            <Card.Img variant="top" src={img3} />
          </Col>
          <Col xs={6} md={4}>
            <Card.Img variant="top" src={img4} />
          </Col>
          <Col xs={6} md={4}>
            <Card.Img variant="top" src={img5} />
          </Col>
        </Row>

        {/* Columns are always 50% wide, on mobile and desktop */}
        <Row>
          <Col xs={6}>
            <Card.Img variant="top" src={img6} />
          </Col>
          <Col xs={6}>
            <Card.Img variant="top" src={img7} />
          </Col>
        </Row>
      </Container>
    );
};

export default PhotoGallery;
