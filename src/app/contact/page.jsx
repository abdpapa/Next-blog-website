import React from 'react'
import styles from "./contact.module.css"
import Image from 'next/image'
const Page = () => {
  return (
    <div className={styles.container}>
    <div className={styles.imgContainer}>
    
        <Image src="/about.png"alt="" fill className={styles.Image}/>
    </div>

    <div className={styles.formContainer}>
        <form className={styles.form}>
            <input   type="text"className={styles.name}placeholder='Name and Surname'  />
            <input   type="text"className={styles.email}placeholder='Email' />
            <input  type="text" className={styles.phone}placeholder='Phone(optional)' />
            <textarea className={styles.message}
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
            <button type="text" className={styles.button}>
             Send
           </button>
        </form>
       
    </div>
   </div>
  )
}

export default Page
