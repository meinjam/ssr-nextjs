import React from 'react';
import DeleteTodo from './DeleteTodoForm.Component';

const SingleTodo = ({ todo }) => {
  return (
    <div className='col-md-8'>
      <div className='card'>
        <div className='card-body d-flex justify-content-between align-items-center'>
          <h5 className='mb-0'>{todo?.task}</h5>
          <DeleteTodo todo={todo} />
        </div>
      </div>
    </div>
  );
};

export default SingleTodo;
