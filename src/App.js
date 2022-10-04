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
      let temp = [...statsArray].indexOf(e)
      let newArray = [...statsArray].slice(0, temp).concat([...statsArray].slice(temp+1))
      setChosenStats(prevStats => {
        return {
          ...prevStats,
          [id.name]:e.label
        }
      })
      console.log(chosenStats)
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
