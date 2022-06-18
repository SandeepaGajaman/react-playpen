import logo from './logo.svg';
import './App.css';
import TestJsx from './playpen/Jsx';
import User from './playpen/Class';
import Student from './playpen/Function';
import Clock from './playpen/State';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TestJsx/>
        <User/>
        <Student name='Sandeepa'/>
        <Student name='Lahiru'/>
        <Clock/>
      </header>
    </div>
  );
}

export default App;
