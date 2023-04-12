import React, { useState } from 'react';
import ProjectContext from './ProjectContext';

function ProjectProvider({ children }) {
  const [username, setUsername] = useState('');
  const args = {
    username,
    setUsername,
  };
  

  return (
    <ProjectContext.Provider value={args}>{children}</ProjectContext.Provider>
  );
}

export default ProjectProvider;
