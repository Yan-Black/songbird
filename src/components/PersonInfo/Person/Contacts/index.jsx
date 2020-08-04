import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { links, icons, tooltips } from '../../../../constants';

const Contacts = () => (
  <div className="cv-contacts">
    <ul className="cv-contacts-list">
      {links.map((link, i) => (
        <li key={link}>
          <a
            href={link}
            className="cv-link"
            target="_blanck"
          >
            <FontAwesomeIcon icon={icons[i]} />
            <span className="cv-tooltip">
              {tooltips[i]}
            </span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);
export default Contacts;
