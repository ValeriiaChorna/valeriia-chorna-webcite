import React, { useState } from 'react';
import Header from '../../components/Header';
import SkillsList from '../../components/Skills/SkillsList';
import GoITworks from '../../components/GoITworks/GoITworks';
import ProjectsList from '../../components/Projects/ProjectList';
import EducationList from '../../components/Education/EducationList';
import ExperienceList from '../../components/Experience/ExperienceList';
import styles from './mainpage.module.css';

const Mainpage = () => {
  const [choosenItem, setChoosenItem] = useState('');

  const handleChange = ({ target: { value } }) => {
    setChoosenItem(value);
  };

  return (
    <div className={styles.mainpage}>
      <Header />
      <div className={styles.banner}></div>
      <h2 className={styles.positionName}>FULL STACK JS DEVELOPER</h2>
      <div className={styles.mainDescrWrapper}>
        <form className={styles.resumListItems}>
          <label>
            <input
              type="radio"
              value="skills"
              checked={'skills' === choosenItem}
              onChange={handleChange}
              className={styles.resumItemButton}
            />
            <h2 className="resumItemText">SKILLS</h2>
          </label>
          <label>
            <input
              type="radio"
              value="experience"
              checked={'experience' === choosenItem}
              onChange={handleChange}
              className={styles.resumItemButton}
            />
            <h2 className="resumItemText">EXPERIENCE</h2>
          </label>
          <label>
            <input
              type="radio"
              value="education"
              checked={'education' === choosenItem}
              onChange={handleChange}
              className={styles.resumItemButton}
            />
            <h2 className={styles.resumItemText}>EDUCATION</h2>
          </label>
        </form>
        <hr />
        <div className={styles.decrItemWrapper}>
          {choosenItem === 'skills' && <SkillsList />}
          {choosenItem === 'education' && (
            <>
              <EducationList />
              <hr />
              <h3>Study works:</h3>
              <GoITworks />
              <ProjectsList />
            </>
          )}
          {choosenItem === 'experience' && <ExperienceList />}
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
