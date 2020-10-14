import React, { useState } from 'react';
// import T from 'prop-types';
import workExperience from '../../data/work_experience.json';
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
