import './App.css';
import StarbucksInput from './components/starbucks-input';

/**
 * Renders the main application layout with a header, instructional text, a link to React documentation, and the {@link StarbucksInput} component.
 *
 * @returns {JSX.Element} The root JSX element for the application.
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <StarbucksInput />
      </header>
    </div>
  );
}

export default App;
