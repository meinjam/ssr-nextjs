import React from 'react';

const loading = () => {
  return (
    <section>
      <div className='container'>
        <div className='placeholder-glow'>
          <span className='placeholder w-100 rounded-1' style={{ height: 200 }}></span>
        </div>
      </div>
    </section>
  );
};

export default loading;
