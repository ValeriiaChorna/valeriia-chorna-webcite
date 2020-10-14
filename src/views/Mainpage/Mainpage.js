import React, { useState } from 'react';
import Header from '../../components/Header';
import SkillsList from '../../components/Skills/SkillsList';
import GoITworks from '../../components/GoITworks/GoITworks';
import ProjectsList from '../../components/Projects/ProjectList';
import EducationList from '../../components/Education/EducationList';
import ExperienceList from '../../components/Experience/ExperienceList';
import './Mainpage.css';

const Mainpage = () => {
  const [choosenItem, setChoosenItem] = useState('');

  const handleChange = ({ target: { value } }) => {
    setChoosenItem(value);
  };

  return (
    <div className="mainpage">
      <Header />
      <div className="banner"></div>
      <h2 className="positionName">FULL STACK DEVELOPER / ANALYST</h2>
      <div className="mainDescrWrapper">
        <form className="resumListItems">
          <label>
            <input
              type="radio"
              value="skills"
              checked={'skills' === choosenItem}
              onChange={handleChange}
              className="resumItemButton"
            />
            <h2 className="resumItemText">SKILLS</h2>
          </label>
          <label>
            <input
              type="radio"
              value="projects"
              checked={'projects' === choosenItem}
              onChange={handleChange}
              className="resumItemButton"
            />
            <h2 className="resumItemText">PROJECTS</h2>
          </label>
          <label>
            <input
              type="radio"
              value="education"
              checked={'education' === choosenItem}
              onChange={handleChange}
              className="resumItemButton"
            />
            <h2 className="resumItemText">EDUCATION</h2>
          </label>
          <label>
            <input
              type="radio"
              value="experience"
              checked={'experience' === choosenItem}
              onChange={handleChange}
              className="resumItemButton"
            />
            <h2 className="resumItemText">EXPERIENCE</h2>
          </label>
        </form>
        <div className="decrItemWrapper">
          {choosenItem === 'skills' && <SkillsList />}
          {choosenItem === 'projects' && (
            <>
              <ProjectsList />
              <GoITworks />
            </>
          )}
          {choosenItem === 'education' && <EducationList />}
          {choosenItem === 'experience' && <ExperienceList />}
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
