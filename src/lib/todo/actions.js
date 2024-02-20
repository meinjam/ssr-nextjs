'use server';

import { supabase } from '../supabase';
import { revalidatePath } from 'next/cache';

export const getAllTodo = async () => {
  let { data: todos, error } = await supabase.from('todos').select('*');

  revalidatePath('/todo');

  return { todos, error };
};

export const postTodo = async (prevState, formData) => {
  const { data, error } = await supabase
    .from('todos')
    .insert([
      {
        task: formData.get('task'),
      },
    ])
    .select();

  //   await new Promise((resolve) => setTimeout(resolve, 5000));

  revalidatePath('/todo');

  //   console.log(data);
  //   console.log(error);

  return { data, error, message: 'Todo added successfully.' };
};

export const deleteTodo = async (prevState, formData) => {
  //   await new Promise((resolve) => setTimeout(resolve, 2000));

  const { error } = await supabase.from('todos').delete().eq('id', formData.get('id'));

  revalidatePath('/todo');

  return { message: `Todo deleted successfully.` };
  //   return { error, prevState: { message: `Deleted todo ${formData?.task}` } };
};
