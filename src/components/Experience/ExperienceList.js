import React, { useState } from 'react';

import workExperience from '../../data/work_experience.json';
import itWorkExperience from '../../data/it-work_experience.json';
import ExperienceItem from './ExperienceItem';
import styles from './Experience.module.css';

export default function ExperienceList() {
  const [chosenItem, setChosenItem] = useState(0);

  function onHandleChange(id) {
    setChosenItem(id);
  }

  return (
    <form>
      <ul key="experiences" className={styles.experienceList}>
        {itWorkExperience
          .map(item => (
            <ExperienceItem
              key={item.id}
              workItem={item}
              chosenItem={chosenItem}
              handleItemChange={onHandleChange}
            />
          ))
          .reverse()}
        <hr />
        <h3>Other:</h3>
        {workExperience
          .map(item => (
            <ExperienceItem
              key={item.id}
              workItem={item}
              chosenItem={chosenItem}
              handleItemChange={onHandleChange}
            />
          ))
          .reverse()}
      </ul>
    </form>
  );
}
