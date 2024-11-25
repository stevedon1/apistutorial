'use server';

import { redirect } from 'next/navigation';

export async function createPost(formData: FormData) {
  const title = formData.get('title')?.toString() || '';
  const content = formData.get('content')?.toString() || '';

  if (title && content) {
    await fetch('http://localhost:3000/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    redirect('/');
  }
}
