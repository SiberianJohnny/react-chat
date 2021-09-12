import './App.css';
import FirstComponent from './components/FirstComponent/FirstComponent'
import SecondComponent from './components/SecondComponent'



const firstProp = 'First component text from props'

function App(props) {
  return (
    <div className="App">
      <header
        className={`App-header ${props.showRed ? 'header-red' : 'header-blue'}`}>
        Hello, {props.name}
      </header>
      <FirstComponent text={firstProp} />
      <SecondComponent />
    </div>
  );
}

export default App;
