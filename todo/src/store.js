import { useReducer } from 'react';
import { createContainer } from 'react-tracked';

const initialState = {
  todos: [
    {
      id: 1,
      task: 'Finish this to-do app...',
      completed: false,
    },
  ],
  query: '',
};

let nextId = 2;

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, { id: nextId++, task: action.task }],
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case 'SET_QUERY':
      return {
        ...state,
        query: action.query,
      };
    default:
      return state;
  }
};

const useValue = () => useReducer(reducer, initialState);

export const {
  Provider,
  useTrackedState,
  useUpdate: useDispatch,
} = createContainer(useValue);
