const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getPosts = async () => {
  const res = await fetch(`${BASE_URL}/posts`, {
    cache: 'no-store',
  });

  return res.json();
};

export const getPost = async (id) => {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch(`${BASE_URL}/posts/${id}`, {
    cache: 'no-store',
  });

  return res.json();
};
