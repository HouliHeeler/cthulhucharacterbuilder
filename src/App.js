import './App.css';
import Characteristics from './Characteristics';
import Header from './Header'
import Investigator from './Investigator';
import Skills from './Skills'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='Profile'>
        <Investigator />
        <Characteristics />
      </div>
      <div className="Prof--Skills">
        <Skills name="70"/>
        <Skills name="60"/>
        <Skills name="60"/>
        <Skills name="50"/>
        <Skills name="50"/>
        <Skills name="50"/>
        <Skills name="40"/>
        <Skills name="40"/>
        <Skills name="40"/>
      </div>
    </div>
  );
}

export default App;
