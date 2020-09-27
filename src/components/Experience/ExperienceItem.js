import React from 'react';
// import T from 'prop-types';
import styles from './Experience.module.css';

export default function ExperienceItem({ workItem }) {
  const {
    id,
    position,
    companyName,
    hrefCompany,
    location,
    companyDiscription,
    period,
    responsibilities,
  } = workItem;
  return (
    <li key={'ExperienceItem' + id} className={styles.experienceItem}>
      <span>{period}</span>
      <h3>{position}</h3>
      <span>
        <a href={hrefCompany} target="_blank" rel="noopener noreferrer">
          {companyName}
        </a>
      </span>
      <p>
        {companyDiscription}, {location}
      </p>
      <ul>
        {responsibilities.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </li>
  );
}
