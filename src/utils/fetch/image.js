const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getImage = async (id) => {
  const res = await fetch(`${BASE_URL}/photos/${id}`, {
    cache: 'no-store',
  });

  return res.json();
};
