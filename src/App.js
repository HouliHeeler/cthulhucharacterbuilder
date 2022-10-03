import './App.css';
// import Navbar from './Components/Navbar';
import Characteristics from './Components/Characteristics';
import Header from './Components/Header'
import Investigator from './Components/Investigator';
import Container from './Components/Container'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Weapons from './Components/Weapons';
import Combat from './Components/Combat';
import {options} from './Constants'
import { useState } from 'react';

function App() {
  // const [strength, setStrength] = useState(null)
  // const [dexterity, setDexterity] = useState(null)
  // const [constitution, setConstitution] = useState(null)
  // const [intelligence, setIntelligence] = useState(null)
  // const [appearance, setAppearance] = useState(null)
  // const [size, setSize] = useState(null)
  // const [education, setEducation] = useState(null)
  // const [power, setPower] = useState(null)
  // const [chosenStats, setChosenStats] = useState([])
  const [statsArray, setStatsArray] = useState([...options])
  function handleChange(e) {
      let temp = [...statsArray].indexOf(e)
      let newArray = [...statsArray].slice(0, temp).concat([...statsArray].slice(temp+1))
      setStatsArray(newArray)
  }
    
  return (
    <div className="App">
      {/* <Navbar className="Navbar"/> */}
      <Header />
      <div className='Profile'>
        <Investigator />
        <Characteristics 
          statsArray={statsArray}
          handleChange={handleChange}                />
      </div>
      <div className="Prof--Skills">
				<DndProvider backend={HTML5Backend}>
					<Container />
				</DndProvider>
			</div>
      <div className='Weapons--Combat'>
        <Weapons />
        <Combat />
      </div>
    </div>
  );
}

export default App;
