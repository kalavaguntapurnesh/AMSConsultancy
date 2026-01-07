import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => (
  <div className="notfound-container">
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <p>The page you are looking for does not exist or an error occurred.</p>
    <Link to="/">Go to Homepage</Link>
  </div>
);

export default NotFound;
