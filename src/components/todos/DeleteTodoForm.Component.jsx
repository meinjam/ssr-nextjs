'use client';

import React, { useEffect } from 'react';
import { deleteTodo } from '@/lib/todo/actions';
import { useFormState, useFormStatus } from 'react-dom';

const initialState = {
  message: '',
};

function DeleteButton() {
  const { pending } = useFormStatus();

  return (
    <button type='submit' disabled={pending} className='btn p-0'>
      {pending ? <LoadingIcon /> : <TrashIcon />}
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
    </form>
  );
};

export default DeleteTodoForm;

export const TrashIcon = () => (
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

export const LoadingIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='loading-icon'
    width={25}
    height={25}
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='#ffbf00'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
    <path d='M12 3a9 9 0 1 0 9 9' />
  </svg>
);
