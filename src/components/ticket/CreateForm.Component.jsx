'use client';

import { postTicket } from '@/lib/ticket/actions';
import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';

const CreateForm = ({ ticket }) => {
  const [state, formAction] = useFormState(postTicket, null);

  // console.log(ticket);

  return (
    <form action={formAction}>
      <div className='mb-3'>
        <label htmlFor='title' className='form-label'>
          Enter Title
        </label>
        <input type='text' className='form-control' id='title' name='title' />
      </div>
      <div className='mb-3'>
        <label htmlFor='description' className='form-label'>
          Enter Description
        </label>
        <textarea className='form-control' name='description' id='description' rows={3} />
      </div>
      <div className='mb-3 form-check'>
        <input type='checkbox' className='form-check-input' id='active' name='active' />
        <label className='form-check-label' htmlFor='active'>
          Active Status
        </label>
      </div>

      <SubmitBtn />
    </form>
  );
};

export default CreateForm;

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button type='submit' className='btn btn-primary' disabled={pending}>
      {pending ? 'Adding...' : 'Add Ticket'}
    </button>
  );
};
