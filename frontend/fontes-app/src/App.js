import Router from './Router'
import ProjectProvider from './context/ProjectProvider';

function App() {
  return (
    <ProjectProvider>
      <Router />
    </ProjectProvider>
  );
}

export default App;
