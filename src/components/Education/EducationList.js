import React from 'react';
import education from '../../data/education.json';
import EducationItem from './EducationItem';
import styles from './EducationList.module.css';

export default function EducationList() {
  return (
    <ul key="education" className={styles.educationList}>
      {education
        .map(item => <EducationItem key={item.id} educItem={item} />)
        .reverse()}
    </ul>
  );
}
