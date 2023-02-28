import React from 'react';
import styles from './EducationList.module.css';

export default function EducationItem({ educItem }) {
  const {
    id,
    nameSchool,
    hrefShcool,
    specialization,
    discr,
    period,
    location,
  } = educItem;
  return (
    <li key={'EducationItem' + id} className={styles.educationItem}>
      <h3>
        {specialization} ({period})
      </h3>
      <span>
        <a href={hrefShcool} target="_blank" rel="noopener noreferrer">
          {nameSchool}
        </a>
      </span>
      <span>{location}</span>
      <p>{discr}</p>
    </li>
  );
}
