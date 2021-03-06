import React from 'react';

interface Props {
  anyRemaining: () => boolean,
  checkAllTodos: () => void
};

const TodoCheckAll = ({anyRemaining, checkAllTodos}: Props) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={!anyRemaining()}
          onChange={checkAllTodos}
        />{' '}
        Check All
      </label>
    </div>
  );
};

export default TodoCheckAll;
