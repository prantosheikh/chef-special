import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <Container className="my5">
      <div className="row mx-auto my-5">
        <h2 className="text-center my-5 fw-bold">Blog Section</h2>
        <div className="col-md-6  p-4">
          <button className="btn btn-warning">
            <Link className="text-black text-decoration-none" to="/">
              Go Home
            </Link>
          </button>
          <h3>
            1. Tell us the differences between uncontrolled and controlled
            components.
          </h3>
          <p>
            Uncontrolled components refer to elements in a system that have
            their own internal state and are not directly controlled by a parent
            component. These components are typically managed by the browser,
            and their state is not synchronized with the rest of the
            application. Examples of uncontrolled components include native HTML
            form elements like input, textarea, and select. On the other hand,
            controlled components are elements in a system that have their state
            controlled by a parent component. The parent component manages the
            state of these components and updates them based on user input or
            other events. This allows for more predictable behavior and easier
            synchronization between components. Controlled components are
            typically implemented using React state or props.
          </p>
        </div>
        <div className="col-md-6 ">
          <h3>2. User How to validate React props using PropTypes</h3>
          <p>
            1. Import PropTypes at the top of your file: import PropTypes from
            prop-types
          </p>
          <p>
            2.Define the expected props using the propTypes property in your
            component.
          </p>
          <p>
            3.For each prop, define its type using one of the available
            validators provided by PropTypes.
          </p>
          <p>4.Use isRequired modifier to define that a prop is required.</p>
          <p>
            5.Use oneOf validator to validate that a prop is one of a set of
            specific values.
          </p>
          <p>6. Use shape validator to validate the shape of an object prop.</p>
        </div>
      </div>
      <div className="row mx-auto my-5">
        <div className="col-md-6">
          <h3>3.Tell us the difference between nodejs and express js.</h3>
          <p>
            Node.js is a run-time environment created to run JavaScript on the
            server side. Express.js is a framework for Node.js, so in order to
            use it, you will use Node.js anyway. Express.js will help you
            organize your application better. It provides many features which
            will speed up the development for example mechanism for middlewares,
            more efficient REST support or robust routing.
          </p>
        </div>
        <div className="col-md-6 ">
          <h3>
            4. What is a custom hook, and why will you create a custom hook
          </h3>
          <p>
            Custom Hooks are functions. Usually, they start with the word “use”
            important convention. Unlike a React component, a custom Hook
            doesn’t need to have a specific signature. We can decide what it
            takes as arguments, and what, if anything, it should return. In
            other words, it’s just like a normal function Custom Hooks allow us
            to access the React ecosystem in terms of hooks, which means we have
            access to all the known hooks like useState, useMemo, useEffect,
            etc. This mechanism enables the separation of logic and view.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Blog;
