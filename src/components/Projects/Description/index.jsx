import React from 'react';
import { enDescriptions } from '../../../constants';
import './index.scss';

const Description = ({ desc }) => {
  const { description, features } = enDescriptions[desc];
  return (
    <div className="cv-project-description">
      <div className="cv-description-header">
        <p className="description">
          {description}
        </p>
      </div>
      <h3>Implemented features:</h3>
      <ul className="features-list">
        {features.map((feature) => (
          <li key={feature}>
            {`- ${feature}`}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Description;
