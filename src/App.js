import logo from './logo.svg';
import './App.css';
import TestJsx from './playpen/Jsx';
import User from './playpen/Class';
import Student from './playpen/Function';
import Clock from './playpen/State';
import LifeCycle from './playpen/LifeCycle';
import Form from './playpen/Events';
import Login from './playpen/ConditionalRendering';
import NumberList from './playpen/Keys';
import WebForm from './playpen/Forms';
import ReusableForm from './playpen/ReusableComponent';
import TemperatureCalculator from './playpen/LiftingStateUpEx1';
import TemperatureCalculator2 from './playpen/LiftingStateUpEx2';
import StateHook from './playpen/StateHooks';
import EffectHook from './playpen/EffectHooks';
import LifeCycleWithHooks from './playpen/TapApp';


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
        <LifeCycle/>
        <Form/>
        <Login/>
        <NumberList/>
        <WebForm/>
        <ReusableForm/>
        <br/>
        <TemperatureCalculator/>
        <br/>
        <TemperatureCalculator2/>
        <StateHook/>
        <EffectHook/>
        <br/>
        <LifeCycleWithHooks/>
        <br/>
      </header>
    </div>
  );
}

export default App;
