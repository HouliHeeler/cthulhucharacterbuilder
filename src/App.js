import './App.css';
import Characteristics from './Characteristics';
import Header from './Header'
import Investigator from './Investigator';
import Example from './Example'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

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
					<Example />
				</DndProvider>
			</div>
    </div>
  );
}

export default App;
