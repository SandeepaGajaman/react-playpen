import logo from './logo.svg';
import './App.css';
import TestJsx from './playpen/Jsx';
import User from './playpen/Class';
import Student from './playpen/Function';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TestJsx/>
        <User/>
        <Student name='Sandeepa'/>
        <Student name='Lahiru'/>
      </header>
    </div>
  );
}

export default App;
