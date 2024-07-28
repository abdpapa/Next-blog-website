import React from 'react'
import styles from "./about.module.css"
import Image from 'next/image'
const About = () => {
  return (
    <div className={styles.container}>

    <div className={styles.textContainer}>
       <h1 className={styles.title}>About Agency</h1>
       <h2 className={styles.h2}>We Create Digital Ideas that are bigger, better,braver Bolder</h2>
      <p className={styles.desc}>  We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.</p>
      
      <div className={styles.boxes}>
      
      <div className={styles.box}>
        <h1>10 K+</h1>
        <p>Years of Experience</p>
      </div>

      <div className={styles.box}>
        <h1>234 K+</h1>
        <p>People Reached</p>
      </div>

      <div className={styles.box}>
        <h1>5 K+</h1>
        <p>Services and Plugins</p>
      </div>

      </div>
    </div>
    <div className={styles.imgContainer}>
    
        <Image src="/about.png"alt="" fill className={styles.Image}/>
    </div>
   </div>
  )
}

export default About
