import { getPosts } from '@/utils/fetch/post';

const Sitemap = async () => {
  const posts = await getPosts();

  return [
    {
      url: 'http://localhost:3001/',
      lastModified: new Date(),
    },
    {
      url: 'http://localhost:3001/about',
      lastModified: new Date(),
    },
    {
      url: 'http://localhost:3001/contact',
      lastModified: new Date(),
    },
    ...posts?.map((post) => {
      return {
        url: `http://localhost:3001/post/${post?.id}`,
        lastModified: new Date(),
      };
    }),
  ];
};

export default Sitemap;
