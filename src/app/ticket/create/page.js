import CreateForm from '@/components/ticket/CreateForm.Component';
import React from 'react';

const page = () => {
  return (
    <section className='py-4'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <h4 className='mb-3'>Create New Ticket</h4>

            <div className='card'>
              <div className='card-body'>
                <CreateForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
