import React from 'react'
import styles from "./blog.module.css"
import PostCard from '@/components/PostCard/PostCard'
import { getPosts } from "@/lib/data";


const getData= async()=>{
     const res=await fetch("http://localhost:3000/api/blog",{next:{revalidate:3600}})
     if(!res.ok)
        throw new Error("Something Went wrong");

     return res.json();
}    
const Blogpage = async() => {

    // const posts=[
    //     {
    //         title:"My First Post",
    //         img:"https://images.pexels.com/photos/26555694/pexels-photo-26555694/free-photo-of-venice.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    //         // img:"/about.png",
    //         body:"t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The  opposed to using 'Content here, content ",
    //         createdAt:"01.01.24"
    //     }
    // ]
   // const posts=await getData();
    const posts = await getPosts();
    

  return (
    <div className={styles.container}>
         {posts?.map((post,index)=>{
            return(  <PostCard item={post}/>)
         })}
    </div>
  )
}

export default Blogpage
