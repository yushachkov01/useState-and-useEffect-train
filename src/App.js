import logo from './logo.svg';
import './App.css';
import Clock from './Time'
import Train from './GetButton'
import CountDown from './CountDown'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Hello world!</div>
     <Clock/>
     <Train/>
     <CountDown/>
      </header>

    </div>
  );
}


export default App;
