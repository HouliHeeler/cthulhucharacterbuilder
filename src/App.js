import './App.css';
import Characteristics from './Components/Characteristics';
import NavBar from './Components/NavBar';
import Header from './Components/Header'
import Investigator from './Components/Investigator';
import Container from './Components/Container'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Weapons from './Components/Weapons';
import Combat from './Components/Combat';
import {options} from './Constants'
import { useState } from 'react';
import LifeStats from './Components/LifeStats';

function App() {
  //Builds an array of chosen stats from the dropdown menus, adjusts the options available in the dropdown menus by reflecting the changes with setStatsArray. Both are adjusted in the handleChange function.
  const [chosenStats, setChosenStats] = useState(
    {
      Strength: null,
      Dexterity: null,
      Constitution: null,
      Intelligence: null,
      Appearance: null,
      Size: null,
      Education: null,
      Power: null,
    })
  const [statsArray, setStatsArray] = useState([...options])

  function handleChange(e, id) {
      setChosenStats(prevStats => {
        return {
          ...prevStats,
          [id.name]:e.label
        }
      })
      let selected = Object.values(chosenStats).filter(item => item !== null && item !== 'Select...')
      setStatsArray([...options].filter(item => !selected.includes(item.label)))
  }
  
  return (
    <div className="App">
      <NavBar />
      <Header />
      <div className="Profile">
        <Investigator />
        <Characteristics 
          statsArray={statsArray}
          handleChange={handleChange}
        />
      </div>
      <LifeStats stats={chosenStats}/>
      <div className="Prof--Skills">
				<DndProvider backend={HTML5Backend}>
					<Container />
				</DndProvider>
			</div>
      <div className='Weapons--Combat'>
        <Weapons />
        <Combat stats={chosenStats}/>
      </div>
    </div>
  );
}

export default App;
