import React from 'react'
import { getUser } from '@/lib/data'
import styles from "./PostUser.module.css"
import Image from 'next/image'
const PostUser = async({id}) => {


    const user=await getUser(id)
    

   // console.log(user)
  return (
    <div className={styles.user}>
    <div className={styles.image}>
    <Image  className={styles.userimg}src= {user.img? user.img :"/noavatar.png"} width={40} height={40}/>
    </div>
    <div className={styles.author}>
        <h4>Author</h4>
        <p>{user.username}</p>
    </div>
    {/* <div className={styles.publish}>
      <h4>Published</h4>
      <span>{post.createdAt?.toString().slice(4,16)}</span>
    </div> */}
   </div>
  )
}

export default PostUser
