import React from 'react';

const loading = () => {
  return (
    <section>
      <div className='container'>
        <div className='row'>
          {Array.from({ length: 9 })
            ?.fill(0)
            ?.map((a, i) => (
              <div className='col-md-4 g-4' key={i}>
                <div className='card'>
                  <div className='card-body'>
                    <div className='placeholder-glow'>
                      <span className='placeholder w-100 rounded-1' style={{ height: 60 }}></span>
                    </div>
                    <div className='placeholder-glow my-3'>
                      <span className='placeholder w-100 rounded-1' style={{ height: 100 }}></span>
                    </div>
                    <div className='placeholder-glow'>
                      <span className='placeholder w-25 rounded-1' style={{ height: 30 }}></span>
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

export default loading;
