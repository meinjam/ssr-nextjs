import React from 'react';

const loading = () => {
  return (
    <section className='py-5'>
      <div className='container'>
        <div className='row justify-content-center g-3'>
          <div className='col-md-8'>
            <div className='placeholder-glow'>
              <span className='placeholder w-25 rounded-1 mb-3' style={{ height: 40 }}></span>
            </div>
            <div className='placeholder-glow'>
              <span className='placeholder w-100 rounded-1' style={{ height: 60 }}></span>
            </div>
            {Array.from({ length: 3 })
              .fill(0)
              ?.map((data, i) => (
                <div key={i} className='placeholder-glow my-3'>
                  <span className='placeholder w-100 rounded-1' style={{ height: 70 }}></span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default loading;
