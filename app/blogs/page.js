import Link from 'next/link';
import React from 'react'

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      description: "Blog 1 description",
    },
    {
      id: 2,
      title: "Blog 2",
      description: "Blog 2 description",
    }
  ];
  return (
    <main>
      <div>Blogs page</div>
      <ul>
        {blogs.map(blog => (
          <Link href={`blogs/${blog.id}`} key={blog.id}>
            <li>{blog.title}</li>
          </Link>
        ))}

      </ul>

    </main>
  )
}
