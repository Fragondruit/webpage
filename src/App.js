import logo from './logo.svg';
import './App.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiDevpost } from 'react-icons/si';

function App() {
  return (
    <div className="App" style={{ display: 'flex', minHeight: '100vh' }}>
      <nav className="App-menu">
        <ul>
          <li>Background</li>
          <li>Publications</li>
          <li>Contributions and Citations</li>
          <li>Awards</li>
          <li>Code samples</li>
          <li>Contact Me!</li>
        </ul>
      </nav>
      <main className="App-content">
        <header className="App-header">
          <h1>Hi, I'm Utkarsh.</h1>
          <div className="App-social-icons">
            <a href="https://www.linkedin.com/in/utkarsh-nigam-49781a168/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={36} />
            </a>
            <a href="https://github.com/Fragondruit" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={36} />
            </a>
            <a href="https://devpost.com/JoshNigam99" target="_blank" rel="noopener noreferrer" aria-label="Devpost">
              <SiDevpost size={36} />
            </a>
          </div>
        </header>
      </main>
    </div>
  );
}

export default App;
