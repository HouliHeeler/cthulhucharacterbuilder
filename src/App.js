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

//Formula for replacing array with unchosen stats

// let array = [40, 50, 50, 50, 60, 60, 70, 80]
// let selectedArray = [40, 50, 60, 60]
// let newArray = []
// let temp;

// for(i=0;i<array.length;i++) {
// 	if(selectedArray.includes(array[i])) {
//    	temp = selectedArray.indexOf(array[i])
//    	selectedArray = selectedArray.slice(0, temp).concat(selectedArray.slice(temp+1))
//   }else {
//    	newArray.push(array[i])
//   }
// }
// console.log(newArray)
    
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
        <Combat stats={chosenStats}/>
      </div>
    </div>
  );
}

export default App;
