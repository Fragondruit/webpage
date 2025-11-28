import Starfield from 'react-starfield';
import './App.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiDevpost } from 'react-icons/si';

function App() {
  const handleResumeDownload = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="App" style={{ display: 'flex', minHeight: '100vh' }}>
      <Starfield
        starCount={2000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
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
          <a href="/Resume.pdf" onClick={handleResumeDownload} download="Resume.pdf" className="App-resume-link">
            Download Resume
          </a>
        </header>
      </main>
    </div>
  );
}

export default App;
