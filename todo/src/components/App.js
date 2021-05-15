import React from 'react';
import '../css/styles.css';
import { Provider } from '../store';
import TodoList from './TodoList';

const App = () => (
  <Provider>
    <TodoList />
  </Provider>
);

export default App;
