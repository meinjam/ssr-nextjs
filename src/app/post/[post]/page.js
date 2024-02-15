import { getImage } from '@/utils/fetch/image';
import { getPost } from '@/utils/fetch/post';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export async function generateMetadata({ params }) {
  const data = await getPost(params?.post);
  const thumb = await getImage(data?.id);

  return {
    title: data?.title,
    description: data?.body,
    openGraph: {
      images: thumb?.url,
    },
  };
}

const SinglePost = async ({ params }) => {
  const data = await getPost(params?.post);
  const thumb = await getImage(data?.id);

  return (
    <section className='py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='position-relative w-100 mb-3' style={{ height: 400 }}>
              <Image
                quality={100}
                fill
                objectFit='cover'
                placeholder='blur'
                blurDataURL={thumb?.thumbnailUrl}
                src={thumb?.url}
                className='img-fluid'
                alt={data?.title}
                unoptimized={true}
              />
            </div>
            <h1 className='text-capitalize mb-3'>{data?.title}</h1>
            <p>{data?.body}</p>
            <Link href='/' className='btn btn-info'>
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePost;
