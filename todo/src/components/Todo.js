import React, { useReducer } from 'react';
import { reducer } from '../reducers/Reducer.js';

const initialState = [
  {
    task: 'Finish this to-do app...',
    completed: false,
    id: 1,
  },
];

const ToDo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>{state.count}</div>
      <button
        onClick={() =>
          dispatch({
            type: 'ADD_TODO',
            payload: {
              task: 'New Todo',
              completed: false,
              id: 2,
            },
          })
        }
      >
        Add It!
      </button>
      <button onClick={() => dispatch({ type: 'COMPLETE_TODO' })}>
        Complete It!
      </button>
    </>
  );
};

export default ToDo;
