export const getImage = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`, {
    cache: 'no-store',
  });

  return res.json();
};
