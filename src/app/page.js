import { getPosts } from '@/utils/fetch/post';
import Link from 'next/link';
import React from 'react';

const Home = async () => {
  const data = await getPosts();
  // console.log(data);

  return (
    <section>
      <div className='container'>
        <div className='row'>
          {data?.map((post) => (
            <div key={post?.id} className='col-md-4 g-4'>
              <div className='card'>
                <div className='card-body'>
                  <h4>{post?.title}</h4>
                  <p>{post?.body}</p>
                  <Link href={`/post/${post?.id}`}>See More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
