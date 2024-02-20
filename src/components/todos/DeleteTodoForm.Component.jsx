'use client';

import React from 'react';
import { deleteTodo } from '@/lib/todo/actions';
import { useFormState, useFormStatus } from 'react-dom';

const initialState = {
  message: '',
};

function DeleteButton() {
  const { pending } = useFormStatus();

  return (
    <button type='submit' className='btn p-0' aria-disabled={pending}>
      <TrashIcon />
    </button>
  );
}

const DeleteTodoForm = ({ todo }) => {
  const [state, formAction] = useFormState(deleteTodo, initialState);

  return (
    <form action={formAction}>
      <input type='hidden' name='id' value={todo?.id} />
      <input type='hidden' name='task' value={todo?.task} />

      <DeleteButton />
      {/* <p aria-live='polite' className='sr-only' role='status'>
        {state?.message}
      </p> */}
    </form>
  );
};

export default DeleteTodoForm;

const TrashIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className=''
    width={25}
    height={25}
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='#ff4500'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
    style={{ cursor: 'pointer' }}
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M4 7l16 0' />
    <path d='M10 11l0 6' />
    <path d='M14 11l0 6' />
    <path d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12' />
    <path d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3' />
  </svg>
);
