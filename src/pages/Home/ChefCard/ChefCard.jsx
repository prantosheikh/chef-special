import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { AiFillLike } from "react-icons/ai";
import { Link } from "react-router-dom";

const ChefCard = () => {
    const [chefDatas, setChefData] = useState([]);
 
  // console.log(chefDatas);
  useEffect(() => {
    fetch("https://chef-recipe-server-prantosheik.vercel.app/")
      .then((res) => res.json())
      .then((data) => setChefData(data));
  }, []);

  return (
    <Container className="my-5">
      <div style={{ marginTop: "150px" }} className="text-center mb-5 ">
        <h3 className="fw-semibold fs-2 mb-4">Chef Section</h3>
        <p className="mb-5 ">
          Meet our talented chefs who create delicious dishes with passion and
          creativity.
        </p>
      </div>
      <Row className="row-cols-2 row-cols-md-3 g-4">
        {chefDatas.map((chefData, index) => (
          <Col key={index}>
            <Card className="border border-0">
              <Card.Img variant="top" src={chefData?.ChefPicture} />
              <Card.Body>
                <Card.Title>{chefData?.ChefName}</Card.Title>
                <div className="d-flex justify-content-between">
                  <Card.Text>{chefData?.YearsOfExperience} Years</Card.Text>
                  <Card.Text>{chefData?.NumbersoFrecipes} Recipe</Card.Text>
                </div>
                <div className="d-flex align-items-center">
                  <AiFillLike></AiFillLike>
                  {chefData?.Likes}
                </div>
              </Card.Body>
              <Link to={`chef/${chefData.id}`}>
                <button className="btn btn-warning px-3 w-100 text-secondary fw-bold">
                  View Recipes
                </button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ChefCard;
