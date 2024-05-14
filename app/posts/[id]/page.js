import getPost from '@/lib/getPost';
import React from 'react'

export default async function Post({params}) {
    const {id, title } = params;
    const post = await getPost(id);
   
  return (
    <div>

      <h1>{post.title}</h1>
      <p className='mt-6'>{post.body}</p>
    </div>
   
  )
}
