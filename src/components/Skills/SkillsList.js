import React from 'react';
import skills from '../../data/skills.json';
import styles from './SkillsList.module.css';

export default function ProjectsList() {
  return (
    <div className={styles.skills}>
      <h3>Languages:</h3>
      <ul key="skills-lan" className={styles.skillsList}>
        {skills[0].lang
          .map((item, i) => (
            <li key={'skills-lan' + i} className={styles.projectsItem}>
              {item}
            </li>
          ))
          .reverse()}
      </ul>
      <h3>Development</h3>
      <ul key="skills-dev" className={styles.skillsList}>
        {skills[0].development.map((item, i) => (
          <li key={'skills-dev' + i} className={styles.projectsItem}>
            {item}
          </li>
        ))}
      </ul>
      <h3>Other</h3>
      <ul key="skills-oth" className={styles.skillsList}>
        {skills[0].other.map((item, i) => (
          <li key={'skills-oth' + i} className={styles.projectsItem}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
