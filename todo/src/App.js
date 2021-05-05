import './App.css';
import ToDo from './reducers/Reducer.js';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h4>Kyle's To-Do App</h4>
      </header>
      <div>
        <ToDo />
      </div>
    </div>
  );
}

export default App;
