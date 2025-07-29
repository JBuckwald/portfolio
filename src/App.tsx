import './App.css';
import { IntroSection } from './components/IntroSection';
import { ProjectSection } from './components/ProjectSection/ProjectSection';

function App() {
  return (
    <main className="bg-portfolio-bg">
      <IntroSection />
      <ProjectSection />
    </main>
  );
}

export default App;
