import React, { useReducer } from 'react';

const initialState = [
  {
    task: 'Finish this to-do app...',
    completed: false,
    id: 1,
  },
];

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: action.payload,
      });
    case 'COMPLETE_TODO':
      return Object.assign({}, state, {
        todos: action.payload,
      });
    default:
      return state;
  }
}

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
