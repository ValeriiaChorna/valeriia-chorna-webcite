import React, { useState } from 'react';
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
    projects,
  } = workItem;

  function experItemHandleChange() {
    if (chosenItem === id) {
      setDisrcOpen(!disrcOpen);
    } else {
      setDisrcOpen(true);
    }

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
        <h3 className={styles.experienceItem_title}>
          <span>{period}</span>
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
          <>
            {!!responsibilities.length && (
              <ul>
                {responsibilities.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {!!projects?.length &&
              projects.map(proj => (
                <div key={proj.title}>
                  <h4>{proj.title}</h4>
                  {!!proj.responsibilities?.length && (
                    <ul>
                      {proj.responsibilities.map(item => (
                        <li key={proj.title + item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
          </>
        )}
      </label>
    </li>
  );
}
