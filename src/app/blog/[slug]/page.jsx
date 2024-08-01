import React from 'react'
import styles from "./slug.module.css"
import Image from 'next/image'
import { connectToDb } from '@/lib/utils'
import {getPost} from "../../../lib/data"
import { Suspense } from 'react'

import PostUser from '@/components/PostUser/PostUser.jsx'

const getData= async(slug)=>{
    const res=await fetch(`http://localhost:3000/api/blog/${slug}`,{next:{revalidate:3600}})
    if(!res.ok)
       throw new Error("Something Went wrong");

    return res.json();
}
const SinglePost = async({params}) => {
 // console.log("params are "+ );
   const {slug}=params
   //console.log(slug);
   const post=await getPost({slug});
   
  return (
  
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
        {post.img &&<Image src={post.img}  alt="" fill className={styles.mainimg}/>}
      </div>
      <div className={styles.textContainer}>
        <h1 className={post.title}>Title</h1>
        <Suspense fallback={<div>Loading...</div>}>
              <PostUser id={post.userId} />
          </Suspense>
       {/* <div className={styles.user}>
        <div className={styles.image}>
        <Image  className={styles.userimg}src="/noavatar.png" width={40} height={40}/>
        </div>
        <div className={styles.author}>
            <h4>Author</h4>
            <p>Terry thompson</p>
        </div>
        <div className={styles.publish}>
          <h4>Published</h4>
          <span>{post.createdAt?.toString().slice(4,16)}</span>
        </div>
       </div> */}
       <div className={styles.body}>
       {post.desc}
       </div>
      </div>
    </div>
   
  )
}

export default SinglePost
