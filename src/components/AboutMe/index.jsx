import React from 'react';
import { aboutMe } from '../../constants';
import './index.scss';

const AboutMe = () => (
  <div className="cv-about-me">
    <div className="cv-about-me-header">
      <h1>About Me</h1>
    </div>
    <div className="cv-about-me-info">
      <p>{aboutMe}</p>
    </div>
  </div>
);

export default AboutMe;
