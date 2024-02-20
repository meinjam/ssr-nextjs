import React from 'react';

const loading = () => {
  return (
    <section className='py-4'>
      <div className='container'>
        <div className='placeholder-glow'>
          <span className='placeholder w-100 rounded-1' style={{ height: 60 }}></span>
        </div>
        <div className='placeholder-glow my-3'>
          <span className='placeholder w-100 rounded-1' style={{ height: 100 }}></span>
        </div>
        <div className='placeholder-glow'>
          <span className='placeholder w-100 rounded-1' style={{ height: 300 }}></span>
        </div>
      </div>
    </section>
  );
};

export default loading;
