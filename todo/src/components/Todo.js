import React from 'react';

import { useDispatch, useTrackedState } from '../store';
import { useFlasher } from '../utils';

const renderHighlight = (task, query) => {
  if (!query) return task;
  const index = task.indexOf(query);
  if (index === -1) return task;
  return (
    <React.Fragment>
      {task.slice(0, index)}
      <b>{query}</b>
      {task.slice(index + query.length)}
    </React.Fragment>
  );
};

const Todo = ({ id, task, completed }) => {
  const dispatch = useDispatch();
  const state = useTrackedState();
  const delTodo = () => {
    dispatch({ type: 'DELETE_TODO', id });
  };
  return (
    <li ref={useFlasher()}>
      <input
        type='checkbox'
        checked={!!completed}
        onChange={() => dispatch({ type: 'TOGGLE_TODO', id })}
      />
      <span
        style={{
          textDecoration: completed ? 'line-through' : 'none',
        }}
      >
        {completed ? task : renderHighlight(task, state.query)}
      </span>
      <button onClick={delTodo}>Delete</button>
    </li>
  );
};

export default React.memo(Todo);
