'use client';

import React, { useEffect, useState } from 'react';
import { postTodo } from '@/lib/todo/actions';
import { useFormState, useFormStatus } from 'react-dom';
import Alert from 'react-bootstrap/Alert';

const initialState = {
  message: '',
};

const AddTodo = () => {
  const [state, formAction] = useFormState(postTodo, initialState);

  return (
    <form action={formAction}>
      <div className='input-group mt-3'>
        <input name='task' type='text' className='form-control form-control-lg' placeholder='Please enter todo' />
        <SubmitButton />
      </div>

      {state?.message !== '' && (
        <Alert variant='success' className='mt-4' dismissible>
          {state?.message}
        </Alert>
      )}
    </form>
  );
};

export default AddTodo;

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className='btn btn-success' type='submit' id='button-addon1' disabled={pending}>
      {pending ? 'Adding...' : 'Add Todo'}
    </button>
  );
}
