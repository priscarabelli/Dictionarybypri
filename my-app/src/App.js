
import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="App-header">
  <h1>Dictionary </h1>
      </header>
      <main>
        <Dictionary defaultWord="profound"/>
      </main>
      <footer>
        Coded by Pri Scarabelli 
        <p>Open-sourced on <a href="https://github.com/priscarabelli/Dictionarybypri.git" target="_blank" rel="noreferrer">Github</a></p>
      </footer>
    </div>
    </div>
  );
}

export default App;
