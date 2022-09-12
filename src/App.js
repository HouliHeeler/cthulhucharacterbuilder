import './App.css';
import Characteristics from './Characteristics';
import Header from './Header'
import Investigator from './Investigator';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='Profile'>
        <Investigator />
        <Characteristics />
      </div>
      
    </div>
  );
}

export default App;
