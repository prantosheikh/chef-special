import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import React, { useContext, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import app from "../firebase/firebase.config";
import { AuthCondext } from "../provider/AuthProvider";

const Login = () => {
  const auth = getAuth(app);
  const providerGoogle = new GoogleAuthProvider();
  const providerGithub = new GithubAuthProvider();
  const { user, signIn } = useContext(AuthCondext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const HandleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    setError("");
    setSuccess("");

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setSuccess("You are successfully logged in");
        navigate(from, { replace: true });
      })

      .catch((error) => {
        setError(error.message);
      });
  };

  const signInWhitGoogle = () => {
    signInWithPopup(auth, providerGoogle)
      .then((result) => {
        console.log(result.user);
        const googleUser = result.user;
        setSuccess("You are successfully logged in");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };
  const signInWhitGithub = () => {
    signInWithPopup(auth, providerGithub)
      .then((result) => {
        const GitHubUser = result.user;
        console.log(GitHubUser);
        setSuccess("You are successfully logged in");
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
  };

  return (
    <Container>
      <div className="row my-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <div className="w-50 mx-auto">
          <Form onSubmit={HandleLogin} className="my-5">
            <h3>Welcome! Please Login to continue.</h3>
            <p>
              New member?
              <span>
                <Link className="text-decoration-none ms-1" to="/register">
                  Register here.
                </Link>
              </span>
            </p>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                className="rounded-0 p-3"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="rounded-0 p-3"
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Text className="text-muted">
              <span className="text-danger">{error}</span>
              <span className="text-success">{success}</span>
            </Form.Text>

            <div className="mt-2">
              <button className="bg-danger border border-0 w-100  mt-5 text-white fw-bold py-3">
                Login
              </button>
              <p>Or,Login With</p>
            </div>
          </Form>
          <div>
            <div>
              <button
                onClick={signInWhitGoogle}
                className="bg-warning  mb-2 py-2 w-50 border border-0 w-100  text-white fw-bold "
              >
                <FaGoogle className="me-3 fs-3 text-white fw-bold" />
                Google
              </button>{" "}
              <button
                onClick={signInWhitGithub}
                className="bg-primary py-2 w-50  border border-0 w-100  text-white fw-bold "
              >
                <FaGithub className="text-white fw-semibold fs-3" /> GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
