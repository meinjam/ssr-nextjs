import DeleteTicket from '@/components/ticket/DeleteTicket.Component';
import { getTickets } from '@/lib/ticket/actions';
import Link from 'next/link';
import React from 'react';

const page = async () => {
  const data = await getTickets();
  // console.log(data);

  return (
    <section className='py-4'>
      <div className='container'>
        <div className='row g-3'>
          <div className='col-12 d-flex justify-content-between align-items-center'>
            <h4 className='m-0'>All Tickets</h4>
            <Link href='/ticket/create' className='btn btn-primary'>
              Create Ticket
            </Link>
          </div>
          {data &&
            data?.data?.map((ticket) => (
              <div className='col-md-4' key={ticket?.id}>
                <div className='card'>
                  <div className='card-body'>
                    <h5 className='title'>{ticket?.title}</h5>
                    <p>{ticket?.description}</p>
                    <div className='d-flex gap-2 align-items-center'>
                      <Link className='btn btn-success' href={`/ticket/${ticket?.slug}`}>
                        Edit
                      </Link>
                      <DeleteTicket slug={ticket?.slug} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default page;
