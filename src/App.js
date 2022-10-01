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

function App() {
  return (
    <div className="App">
      {/* <Navbar className="Navbar"/> */}
      <Header />
      <div className='Profile'>
        <Investigator />
        <Characteristics />
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
