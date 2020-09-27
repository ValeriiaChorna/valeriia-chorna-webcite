import React from 'react';
import projects from '../../data/projects.json';
import ProjectsItem from './ProjectItem';
import styles from './ProjectList.module.css';

export default function ProjectsList() {
  return (
    <ul key="projects" className={styles.projectsList}>
      {projects
        .map(item => <ProjectsItem key={item.id} projectsItem={item} />)
        .reverse()}
    </ul>
  );
}
