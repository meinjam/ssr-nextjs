'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const BASE_URL = process.env.FRONTEND_URL;

export const getTickets = async () => {
  const res = await fetch(`${BASE_URL}/api/ticket`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data.');
  }

  return res.json();
};

export const getTicket = async (id) => {
  const res = await fetch(`${BASE_URL}/api/ticket/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data.');
  }

  return res.json();
};

export const postTicket = async (prevState, formData) => {
  const postData = {
    title: formData.get('title'),
    description: formData.get('description'),
    active: formData.get('active') ? true : false,
  };

  const res = await fetch(`${BASE_URL}/api/ticket`, {
    cache: 'no-store',
    method: 'POST',
    headers: {
      Accept: 'application.json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  });

  return redirect(`/ticket`);
};

export const updateTicket = async (prevState, formData) => {
  const updateData = {
    title: formData.get('title'),
    description: formData.get('description'),
    active: formData.get('active') ? true : false,
  };

  await fetch(`${BASE_URL}/api/ticket/${formData.get('slug')}`, {
    method: 'PUT',
    headers: {
      Accept: 'application.json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateData),
  });

  redirect(`/ticket`);
};

export const deleteTicket = async (prevState, formData) => {
  const slug = formData.get('slug');

  const res = await fetch(`${BASE_URL}/api/ticket/${slug}`, {
    cache: 'no-store',
    method: 'DELETE',
  });

  revalidatePath('/ticket');
};
