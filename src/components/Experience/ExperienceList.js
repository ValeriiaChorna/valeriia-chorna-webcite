import React from 'react';
// import T from 'prop-types';
import workExperience from '../../data/work_experience.json';
import ExperienceItem from './ExperienceItem';
import styles from './Experience.module.css';

export default function ExperienceList() {
  return (
    <ul key="experiences" className={styles.experienceList}>
      {workExperience
        .map(item => <ExperienceItem key={item.id} workItem={item} />)
        .reverse()}
    </ul>
  );
}
