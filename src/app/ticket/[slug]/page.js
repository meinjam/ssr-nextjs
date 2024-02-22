import CreateForm from '@/components/ticket/CreateForm.Component';
import { getTicket } from '@/lib/ticket/actions';
import React from 'react';

const page = async (props) => {
  const { slug } = props?.params;
  const ticket = await getTicket(slug);
  //   console.log(slug);
  //   console.log(ticket);

  return (
    <section className='py-4'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <h4 className='mb-3'>Edit Ticket</h4>

            <div className='card'>
              <div className='card-body'>
                <CreateForm ticket={ticket?.data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
