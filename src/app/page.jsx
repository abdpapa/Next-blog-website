"use client"
import styles from "./Home.module.css"
import Image from "next/image";
import {  motion } from "framer-motion";
const Home = () => {
  return (

    <motion.div initial={{y:"-200vh"}} animate={{y:"0vh"}} transition={{duration:1}}>
  <div className={styles.container}>

   <div className={styles.textContainer}>
      <h1 className={styles.title}>News Blogs Agency</h1>
     <p className={styles.desc}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, </p>
     <div className={styles.buttons}>
     <button className={styles.blueButton}>
      Learn More
     </button>
     <button className={styles.whiteButton}>
      Contact
     </button>
     </div>
     <div className={styles.brands}>
      <Image src="/brands.png" alt="" width={500} height={50} className={styles.brandImg}/>
     </div>
   </div>
   <div className={styles.imgContainer}>
    {/* <img  className={styles.image}src="/hero.gif"/> */}
       <Image src="/hero.gif"alt="" fill className={styles.Image}/>
   </div>
  </div>
  </motion.div>
  )

};

export default Home;