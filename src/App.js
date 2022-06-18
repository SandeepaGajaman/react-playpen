import logo from './logo.svg';
import './App.css';
import TestJsx from './playpen/Jsx';
import User from './playpen/Class';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TestJsx/>
        <User/>
      </header>
    </div>
  );
}

export default App;
