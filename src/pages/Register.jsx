import { getAuth, updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import app from "../firebase/firebase.config";
import { AuthCondext } from "../provider/AuthProvider";

const Register = () => {
  const auth = getAuth(app);
  const { createUser, } = useContext(AuthCondext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, name, photo, password);

    setError("");
    setSuccess("");

    if (!/(?=.*[A-Z])/.test(password)) {
      return setError("Should contain at least one upper case");
    }
    else if (!/^.{6}$/.test(password)) {
      return setError("Password must be exactly 6 characters.");
    }
      createUser(email, password)
        .then((result) => {
          const users = result.user;
          setSuccess("You are successfully registration in");
          console.log(users);
          handleUserupdateProfile(users, name, photo);
        })
        .catch((error) => {
          setError(error.message);
          console.log(error);
        });
  };

  const handleUserupdateProfile = (users, name, photo) => {
    updateProfile(users, {
      displayName: name,
      photoURL: photo,
    })
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Container>
      <div className="row my-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <div className="col-sm-12 col-md-8 mx-auto">
          <Form onSubmit={handleRegister} className="w-75 mx-auto my-5">
            <h3>Create your Daraz Account</h3>
            <p>
              Already member?
              <span>
                <Link className="text-decoration-none ms-1" to="/login">
                  Login here.
                </Link>
              </span>
            </p>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Name</Form.Label>
              <Form.Control
                type="name"
                name="name"
                placeholder="Enter Name"
                className="rounded-0 p-3"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your photoURL</Form.Label>
              <Form.Control
                type="name"
                name="photo"
                placeholder="Enter photoURL"
                className="rounded-0 p-3"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                className="rounded-0 p-3"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="rounded-0 p-3"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <Form.Text className="text-danger">
              <span className="text-danger">{error}</span>
              <span className="text-success">{success}</span>
            </Form.Text>

            <Form.Group className="mt-4" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Acceptd Term" />
            </Form.Group>

            <div className="mt-3">
              <button
                type="submit"
                className="bg-danger border border-0 w-100  text-white fw-bold py-3"
              >
                Login
              </button>
              <p className="text-secondary mt-2">
                By clicking SIGN UP, I agree to Chef Special{" "}
                <Link className="text-decoration-none">Terms of Use</Link> and
                Privacy Policy
              </p>
            </div>
            <span>Or,Login With</span>
            <div className="d-flex gap-3 mt-2">
              <Button
                variant="primary"
                type="submit"
                className="bg-warning py-2 w-50 border border-0 w-100  text-white fw-bold"
              >
                <FaGoogle className="me-3 text-white fw-bold" />
                Google
              </Button>{" "}
              <button className="bg-primary py-2 w-50 border border-0 w-100  text-white fw-bold ">
                <FaFacebookF className="text-white fw-semibold" /> Facebook
              </button>
            </div>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default Register;
