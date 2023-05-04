import React from "react";
import { Card } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import img6 from '../../../../public/img/img1/1 (1).avif';
import img7 from '../../../../public/img/img1/1 (1).jpg';
import img8 from '../../../../public/img/img1/1 (2).jpg';
import img9 from '../../../../public/img/img1/1 (3).jpg';
import img1 from '../../../../public/img/img1/14852515_5526265.jpg';
import img3 from '../../../../public/img/img1/30681628_7697984.jpg';
import img4 from '../../../../public/img/img1/30710498_7697955.jpg';
import img5 from '../../../../public/img/img1/bsd555200900736.jpg';


const MarqueeSection = () => {
 
 
  return (
    <div>
      <Marquee>
        <Marquee>
          <Card
            className="rounded-circle border border-0 mx-5"
            style={{ width: "18rem" }}
          >
            <Card.Img variant="top" src={img1} />
            <Card.Body></Card.Body>
          </Card>
          <Card
            className="rounded-circle border border-0 mx-5"
            style={{ width: "18rem" }}
          >
            <Card.Img className="rounded-circle " variant="top" src={img9} />
            <Card.Body></Card.Body>
          </Card>
          <Card
            className="rounded-circle border border-0 mx-5"
            style={{ width: "18rem" }}
          >
            <Card.Img className="rounded-circle " variant="top" src={img8} />
            <Card.Body></Card.Body>
          </Card>
          <Card
            className="rounded-circle border border-0 mx-5"
            style={{ width: "18rem" }}
          >
            <Card.Img className="rounded-circle " variant="top" src={img7} />
            <Card.Body></Card.Body>
          </Card>
          <Card
            className="rounded-circle border border-0 mx-5"
            style={{ width: "18rem" }}
          >
            <Card.Img className="rounded-circle " variant="top" src={img6} />
            <Card.Body></Card.Body>
          </Card>
          <Card
            className="rounded-circle border border-0 mx-5"
            style={{ width: "18rem" }}
          >
            <Card.Img className="rounded-circle " variant="top" src={img3} />
            <Card.Body></Card.Body>
          </Card>
          <Card
            className="rounded-circle border border-0 mx-5"
            style={{ width: "18rem" }}
          >
            <Card.Img className="rounded-circle " variant="top" src={img4} />
            <Card.Body></Card.Body>
          </Card>
          <Card
            className="rounded-circle border border-0 mx-5"
            style={{ width: "18rem" }}
          >
            <Card.Img className="rounded-circle " variant="top" src={img5} />
            <Card.Body></Card.Body>
          </Card>
        </Marquee>
      </Marquee>
    </div>
  );
};

export default MarqueeSection;
