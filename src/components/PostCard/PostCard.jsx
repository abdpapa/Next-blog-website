import React from 'react'
import styles from "./PostCard.module.css"
import Image from 'next/image'
import Link from 'next/link'
const PostCard = ({item}) => {


  
  return (
    <div className={styles.container}>
      
      <div className={styles.imgcontainer}>
       {item.img && <Image src={item.img} alt="" width={300} height={300} className={styles.image}/>
       }
       </div>
     
       
       <div className={styles.title}>
        {item.title}
       </div>

       <div className={styles.body}>
        {item.desc}
       </div>
       
       <span className={styles.date}> <strong>Created At </strong> : {item.createdAt?.toString().slice(4,16)}</span>
       <Link href={`/blog/${item.slug}`}>Read More </Link>
    </div>
  )
}

export default PostCard
