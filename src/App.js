import './App.css';
import Characteristics from './Characteristics';
import Header from './Header'
import Investigator from './Investigator';
import Container from './Container'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Weapons from './Weapons';
import Combat from './Combat';

function App() {
  return (
    <div className="App">
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
