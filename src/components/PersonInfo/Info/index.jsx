import React from 'react';
import codewars from '../../../assets/codewars.png';
import { skills } from '../../../constants';
import './index.scss';

const Info = () => (
  <div className="cv-info">
    <div className="info-header">
      <h1>Hello!</h1>
      <h2>My name is Yan, i&apos;m front-end developer.</h2>
    </div>
    <div className="person-data">
      <div className="cv-technologies">
        <h2>Technologies stack:</h2>
        <ul className="cv-technologies-list">
          {skills.map((skill) => (
            <li key={skill}>{`- ${skill}`}</li>
          ))}
        </ul>
      </div>
      <div className="cv-codewars">
        <h2>
          <a
            href="https://www.codewars.com/users/Yan_Black"
            className="cv-codewars-link"
            target="_blanck"
          >
            Codewars profile:
          </a>
        </h2>
        <img
          className="cv-codewars-image"
          src={codewars}
          alt="codewars"
        />
      </div>
    </div>
  </div>
);
export default Info;
