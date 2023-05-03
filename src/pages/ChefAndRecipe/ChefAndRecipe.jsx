import React from "react";
import { Card, CardGroup, Container } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const ChefAndRecipe = () => {
  const chefRecipes = useLoaderData();
  console.log(chefRecipes?.recipes);
  return (
    <Container>
      <div className="row">
        <div className="col-8">
          <Card className="border border-0">
            <Card.Img variant="top" src={chefRecipes?.ChefPicture} />

            <Card.Body>
              <div>
                <span className="fs-5 fw-semibold">
                  {chefRecipes?.YearsOfExperience} Years
                </span>
                <span className="fs-5 ms-3 fw-semibold">
                  {chefRecipes?.NumbersoFrecipes} Recipes
                </span>

                <FaHeart className="fs-5 ms-3"></FaHeart>
              </div>

              <Card.Title className="fs-1">{chefRecipes?.ChefName}</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="col-4">
          {chefRecipes?.recipes?.slice(0, 1).map((recipe, index) => (
            <Card className="border border-0" key={index}>
              <Card.Img variant="top" src={recipe?.Image} />
              <Card.Body>
                <p>{recipe?.RecipeName}</p>
                <p>Ingredients : {recipe?.Ingredients}</p>
                <p>{recipe?.Directions} </p>
              </Card.Body>
            </Card>
          ))}
          <div className="mt-5">CATEGORIES</div>
        </div>
      </div>
      <Container className="d-flex justify-content-between ">
        {chefRecipes?.recipes.map((recipe) => (
          <CardGroup>
            <Card style={{ width: "25rem" }} className="border border-0">
              <Card.Img variant="top" src={recipe?.Image} />
              <Card.Body>
                <h4 className="fw-bold">{recipe?.RecipeName}</h4>
                <p className="text-secondary-emphasis fs-5 ">
                  Ingredients : {recipe?.Ingredients}
                </p>
                <p className="text-secondary">{recipe?.Directions}</p>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        ))}
      </Container>
    </Container>
  );
};

export default ChefAndRecipe;

