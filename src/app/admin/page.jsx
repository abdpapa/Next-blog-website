"use client"
import React from 'react'
import { Suspense } from 'react'
import Adminpostform from '@/components/adminpostform/adminpostform'
import { auth } from '@/lib/auth'
import styles from "./admin.module.css"
import AdminPosts from '@/components/adminposts/adminposts'
import AdminUserForm from '@/components/adminuserform/adminuserform'
import AdminUsers from '@/components/adminusers/adminusers'
import { motion } from 'framer-motion'

const Admin =async () => {

    const session=await auth();
  //  console.log(session.user);
  return (
    <motion.div initial={{y:"-200vh"}} animate={{y:"0vh"}} transition={{duration:1}}>
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.col}>
          <Adminpostform userId = {session.user.id} />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminUserForm />
        </div>
      </div>
      </div>
      </motion.div>
  )
}
export default Admin
