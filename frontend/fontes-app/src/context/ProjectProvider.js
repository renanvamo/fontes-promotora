import React from 'react';
import ProjectContext from './ProjectContext';

function ProjectProvider({ children }) {
  const args = {};

  return (
    <ProjectContext.Provider value={args}>{children}</ProjectContext.Provider>
  );
}

export default ProjectProvider;
