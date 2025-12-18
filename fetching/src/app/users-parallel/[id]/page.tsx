import React from 'react'

type Post = {
    userId:number;
    id:number;
    title:string;
    body:string;
}

type Album = {
    userId:number;
    id:number;
    title:string;
}

async function getUserPosts(userId:string){
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/?userId=${userId}`
    )
    return res.json()
}

async function getUserAlbums(userId:string){
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/albums/?userId=${userId}`
    )
    return res.json()
}

export default async function UserProfile ({params}:{params:Promise<{id:string}>}){
    const {id} = await params
    const postsData = getUserPosts(id)
    const albumsData = getUserAlbums(id)
    const [posts, albums] = await Promise.all([postsData, albumsData])
    console.log(posts)
    console.log(albums)
  return (
    <div>page</div>
  )
}

