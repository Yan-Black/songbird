import React from 'react';
import avatar from '../../../assets/avatar.jpg';
import Contacts from './Contacts';

const Person = () => (
  <div className="cv-person">
    <img
      className="cv-avatar"
      src={avatar}
      alt="avatar"
    />
    <Contacts />
  </div>
);

export default Person;
