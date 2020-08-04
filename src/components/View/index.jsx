import React from 'react';
import PersonInfo from '../PersonInfo';
import AboutMe from '../AboutMe';
import Projects from '../Projects';
import Education from '../Education';
import English from '../English';
import './index.scss';

const View = () => (
  <div className="cv-view">
    <div className="cv-wrapper">
      <PersonInfo />
      <AboutMe />
      <Projects />
      <English />
      <Education />
    </div>
  </div>
);

export default View;
