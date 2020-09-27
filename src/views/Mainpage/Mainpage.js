import React from 'react';
import MainInfo from '../../components/MainInfo/MainInfo';
import SkillsList from '../../components/Skills/SkillsList';
import GoITworks from '../../components/GoITworks/GoITworks';
import ProjectsList from '../../components/Projects/ProjectList';
import EducationList from '../../components/Education/EducationList';
import ExperienceList from '../../components/Experience/ExperienceList';
import styles from './Mainpage.module.css';

const Mainpage = () => {
  return (
    <div className={styles.mainpage}>
      <div className={styles.banner}></div>
      <div className={styles.skillList_wrapper}>
        <h1>VALERIIA CHORNA - FULL STACK DEVELOPER</h1>
        <span>Location: Kyiv, Ukraine</span>
        <h2>Contacts:</h2>
        <MainInfo />
        <h2>SKILLS</h2>
        <SkillsList />
      </div>
      <h2>PROJECTS</h2>
      <ProjectsList />
      <GoITworks />
      <h2>EDUCATION</h2>
      <EducationList />
      <h2>EXPERIENCE</h2>
      <ExperienceList />
    </div>
  );
};

export default Mainpage;
