import React, { useContext } from "react";
import { Card, CardGroup, Container } from "react-bootstrap";
import { FaHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthCondext } from "../../provider/AuthProvider";

const ChefAndRecipe = () => {
  const chefRecipes = useLoaderData();
  const { loading } = useContext(AuthCondext);

  console.log(chefRecipes);

  return (
    <Container>
      <div className="my-5">
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

                <Card.Title className="fs-1">
                  {chefRecipes?.ChefName}
                </Card.Title>
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
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex  gap-2 align-items-center">
                      <Rating
                        className="text-danger fs-5"
                        placeholderRating={recipe?.Likes}
                        emptySymbol={<FaStarHalfAlt></FaStarHalfAlt>}
                        placeholderSymbol={<FaStar></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                        readonly
                      />
                      <span className="fs-5">{recipe.Likes}</span>
                    </div>
                    <div>
                      <div>
                        <button
                          className="btn btn-danger"
                          onClick={() => toast.success("Favorite Fecipe!")}
                        >
                          favorite
                        </button>
                        <ToastContainer />
                      </div>
                    </div>
                  </div>
                </Card.Footer>
              </Card>
            </CardGroup>
          ))}
        </Container>
      </div>
    </Container>
  );
};

export default ChefAndRecipe;
