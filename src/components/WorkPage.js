import React from 'react';
import { Link } from 'react-router-dom';

const Work = () => (
  <div>
    <h1>Work</h1>
    <p>Check out the stuff I've done!</p>
    <Link to="/work/1">Item One</Link>
    <Link to="/work/2">Item Two</Link>
  </div>
);

export default Work;
