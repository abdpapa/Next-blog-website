import React from 'react'
import styles from "./Navbar.module.css"
import Link from 'next/link'
import Links from './Links/Links.jsx'
import { auth } from '@/lib/auth'

const Navbar =async () => {

  const session= await auth()
 // console.log(session)
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        Logo
      </div>
        <Links session={session}/>
    </div>
  )
}

export default Navbar
