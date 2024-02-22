'use client';

import { postTicket, updateTicket } from '@/lib/ticket/actions';
import Link from 'next/link';
import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';

const CreateForm = ({ ticket }) => {
  const method = ticket ? updateTicket : postTicket;
  const [state, formAction] = useFormState(method, null);

  // console.log(ticket);

  return (
    <form action={formAction}>
      <div className='mb-3'>
        <label htmlFor='title' className='form-label'>
          Enter Title
        </label>
        <input type='text' className='form-control' id='title' name='title' defaultValue={ticket?.title} />
      </div>
      <input type='hidden' name='slug' value={ticket?.slug} />
      <div className='mb-3'>
        <label htmlFor='description' className='form-label'>
          Enter Description
        </label>
        <textarea
          className='form-control'
          name='description'
          id='description'
          rows={3}
          defaultValue={ticket?.description}
        />
      </div>
      <div className='mb-3 form-check'>
        <input
          type='checkbox'
          className='form-check-input'
          id='active'
          name='active'
          defaultChecked={ticket?.active ? 'checked' : ''}
        />
        <label className='form-check-label' htmlFor='active'>
          Active Status
        </label>
      </div>

      <SubmitBtn ticket={ticket} />
    </form>
  );
};

export default CreateForm;

const SubmitBtn = ({ ticket }) => {
  const { pending } = useFormStatus();

  return (
    <div className='d-flex gap-2 align-items-center'>
      <button type='submit' className='btn btn-primary' disabled={pending}>
        {ticket ? (pending ? 'Updating...' : 'Update Ticket') : pending ? 'Adding...' : 'Add Ticket'}
        {/* {pending ? 'Adding...' : 'Add Ticket'} */}
      </button>
      <Link href={'/ticket'} className='btn btn-danger'>
        Go Back
      </Link>
    </div>
  );
};
