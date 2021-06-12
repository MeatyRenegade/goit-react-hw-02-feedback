// import { component } from 'React';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header">Please leave feedback</h1>
        <button className="button">Good</button>
        <button className="button">Neutral</button>
        <button className="button">Bad</button>
        <h1 className="header">Statistics</h1>
        <p className="text">Good:0</p>
        <p className="text">Neutral:0</p>
        <p className="text">Bad:0</p>
      </header>
    </div>
  );
}

export default App;
