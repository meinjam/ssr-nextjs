export const getPosts = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    cache: 'no-store',
  });

  return res.json();
};

export const getPost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: 'no-store',
  });

  return res.json();
};
