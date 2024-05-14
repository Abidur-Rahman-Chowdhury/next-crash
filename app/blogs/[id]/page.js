import React from 'react'

export default function BlogPage({params}) {
    const {id} = params;
  return (
    <div>The blog id is: {id}</div>
  )
}
