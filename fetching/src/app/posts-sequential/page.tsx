import React from 'react'

type Post = {
    userId: number;
    id:number;
    title:string;
    body:string
}

export default async function page(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts:Post[] = await response.json()
    const filterPosts = posts.filter((post)=> post.id %10===1)
    console.log(filterPosts)

  return (
    <div>page</div>
  )
}

