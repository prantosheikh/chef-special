import React from "react";
import { Container, Form } from "react-bootstrap";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <Container>
      <div className="row my-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <div className="col-sm-12 col-md-8">
          <Form className="w-75 mx-auto my-5">
            <h3>Welcome! Please Login to continue.</h3>
            <p>
              New member?
              <span>
                <Link className="text-decoration-none ms-1" to="/regiter">
                  Register here.
                </Link>
              </span>
            </p>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="rounded-0 p-3"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="rounded-0 p-3"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form>
        </div>
        <div className="col-sm-12 col-md-4 my-5">
          <div className="mt-5">
            <button className="btn btn-danger w-75 mt-5 text-white fw-bold">
              Login
            </button>
            <p>Or,Login With</p>
          </div>
          <div>
            <button className="btn btn-warning w-75 my-3 text-white fw-bold">
              <FaGoogle className="me-3 text-white fw-bold" />
              Google
            </button>{" "}
            <br />
            <button className="btn btn-primary w-75 text-white fw-bold">
              <FaFacebookF className="text-white fw-semibold" /> Facebook
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
