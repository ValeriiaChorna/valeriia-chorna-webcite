import React, { useState } from 'react';
// import T from 'prop-types';
import styles from './Experience.module.css';

export default function ExperienceItem({
  workItem,
  chosenItem,
  handleItemChange,
}) {
  const [disrcOpen, setDisrcOpen] = useState(false);

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

  function experItemHandleChange() {
    setDisrcOpen(!disrcOpen);
    if (chosenItem !== id) {
      handleItemChange(id);
    }
  }

  return (
    <li key={'ExperienceItem' + id} className={styles.experienceItem}>
      <label>
        <input
          type="radio"
          value={id}
          checked={id === disrcOpen}
          onChange={experItemHandleChange}
          className="experItemButton"
        />
        <h3>
          <span>{period} - </span>
          {position}
        </h3>
        <span className={styles.experienceItem_company}>
          <a
            href={hrefCompany}
            title={companyDiscription}
            target="_blank"
            rel="noopener noreferrer"
          >
            {companyName}
          </a>
          , {location}
        </span>
        {id === chosenItem && disrcOpen && (
          <ul>
            {responsibilities.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </label>
    </li>
  );
}
