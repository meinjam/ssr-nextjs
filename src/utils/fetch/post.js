const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getPosts = async () => {
  const res = await fetch(`${BASE_URL}/posts`, {
    cache: 'no-store',
  });

  return res.json();
};

export const getPost = async (id) => {
  const res = await fetch(`${BASE_URL}/posts/${id}`, {
    cache: 'no-store',
  });

  return res.json();
};
