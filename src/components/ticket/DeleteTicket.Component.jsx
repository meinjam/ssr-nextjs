'use client';

import { deleteTicket } from '@/lib/ticket/actions';
import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';

const DeleteTicket = ({ slug }) => {
  const [state, formAction] = useFormState(deleteTicket, null);

  return (
    <form action={formAction}>
      <input type='hidden' name='slug' value={slug} />
      <DeleteButton />
    </form>
  );
};

export default DeleteTicket;

function DeleteButton() {
  const { pending } = useFormStatus();

  return (
    <button type='submit' disabled={pending} className='btn btn-danger'>
      {pending ? 'Deleting...' : 'Delete'}
    </button>
  );
}
