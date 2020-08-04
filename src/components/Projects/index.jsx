import React, { useState } from 'react';
import Description from './Description';
import { projects } from '../../constants';
import './index.scss';

const Projects = () => {
  const [isDescOpen, setIsDescOpen] = useState(false);
  const [desc, setDesc] = useState('');
  const clickHandler = (e) => {
    const { target } = e;
    if (target.id) {
      setDesc(target.id);
      setIsDescOpen(true);
    } else {
      setIsDescOpen(false);
    }
  };
  return (
    <div
      className="cv-projects"
      onClick={clickHandler}
    >
      <div className="cv-projects-header">
        <h1>Projects</h1>
      </div>
      <div className="cv-projects-main">
        <div className="cv-projects-info">
          {projects.map(({ category }) => (
            <ul
              className="cv-projects-list"
              key={category.categoryName}
            >
              <li>
                <b>
                  {`${category.categoryName}:`}
                </b>
                {category.prjcts.map((prjct) => (
                  <ul key={prjct.name}>
                    <button
                      type="button"
                      className={
                        isDescOpen && desc === prjct.id
                          ? 'cv-project-handler cv-project-handler-active'
                          : 'cv-project-handler'
                      }
                      id={prjct.id}
                    >
                      {prjct.name}
                      <span className="cv-tooltip">
                        click for description
                      </span>
                    </button>
                    <li className="cv-projects-link">
                      <a
                        className="projects-link"
                        href={prjct.github}
                        target="_blanck"
                      >
                        Github link
                      </a>
                    </li>
                    <li className="cv-projects-link">
                      <a
                        className="projects-link"
                        href={prjct.project}
                        target="_blanck"
                      >
                        Project link
                      </a>
                    </li>
                  </ul>
                ))}
              </li>
            </ul>
          ))}
        </div>
        <div className="cv-projects-description-container">
          {isDescOpen
            ? <Description desc={desc} />
            : (
              <span className="description-placeholder">
                Project description
              </span>
            )}
        </div>
      </div>
    </div>
  );
};
export default Projects;
