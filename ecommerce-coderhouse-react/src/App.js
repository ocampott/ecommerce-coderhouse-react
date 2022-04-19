import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
