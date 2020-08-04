import React from 'react';
import Person from './Person';
import Info from './Info';
import './index.scss';

const PersonInfo = () => (
  <div className="cv-person-info">
    <Person />
    <Info />
  </div>
);

export default PersonInfo;
