import logo from './logo.svg';
import './App.css';
import './playpen/Jsx'
import TestJsx from './playpen/Jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TestJsx/>
      </header>
    </div>
  );
}

export default App;
