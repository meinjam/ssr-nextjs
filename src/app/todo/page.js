import React from 'react';
import SingleTodo from '@/components/todos/SingleTodo.Component';
import AddTodo from '@/components/todos/AddTodo.Component';
import { getAllTodo } from '@/lib/todo/actions';

const Todo = async () => {
  const { todos, error } = await getAllTodo();

  return (
    <section className='py-4'>
      <div className='container'>
        <div className='row justify-content-center g-3'>
          <div className='col-md-8'>
            <h3>Todos</h3>
            <AddTodo />
          </div>

          {todos?.length > 0 ? (
            todos?.map((todo) => <SingleTodo key={todo?.id} todo={todo} />)
          ) : (
            <div className='col-md-8'>
              <h5>Sorry, no todo found</h5>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Todo;
