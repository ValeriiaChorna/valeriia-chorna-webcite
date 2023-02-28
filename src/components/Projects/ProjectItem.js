import React from 'react';
import styles from './ProjectList.module.css';

export default function ProjectsItem({ projectsItem }) {
  const { id, period, name, discr, location, href, respons } = projectsItem;
  return (
    <li key={'ProjectsItem' + id} className={styles.projectsItem}>
      <h3>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {name}
        </a>{' '}
        (<span>{period}</span>
        <span>{location}</span>)
      </h3>
      <p>{discr}</p>
      <p>{respons}</p>
    </li>
  );
}
