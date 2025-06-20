import logo from './logo.svg';
import './App.css';

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
        </header>
      </main>
    </div>
  );
}

export default App;
